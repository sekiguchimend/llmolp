#!/bin/bash

# Force deployment script - Run this to manually deploy to EC2
# This will force pull, rebuild, and restart everything

set -e

EC2_HOST="43.206.102.223"
EC2_USER="ec2-user"
SSH_KEY="$HOME/Downloads/umoren_LP.pem"

echo "🚀 Force Deploying to EC2..."
echo "================================"

# Check if SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    echo "❌ SSH key not found at $SSH_KEY"
    echo "Please update the SSH_KEY path in this script"
    exit 1
fi

# SSH into EC2 and run deployment commands
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$EC2_USER@$EC2_HOST" << 'ENDSSH'
set -e

echo "📁 Navigating to project directory..."
cd /home/ec2-user/llmolp || {
    echo "❌ Project directory not found!"
    exit 1
}

echo "📥 Fetching latest code from GitHub..."
git fetch origin main

echo "🔄 Resetting to latest main branch..."
git reset --hard origin/main

echo "🧹 Cleaning all caches and build artifacts..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .next/cache

echo "📦 Reinstalling dependencies..."
npm ci --production=false

echo "🔨 Building application..."
export NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL:-"https://placeholder.supabase.co"}
export NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY:-"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder"}
npm run build

echo "🛑 Stopping PM2 process..."
pm2 stop umoren-ai || true
pm2 delete umoren-ai || true

echo "🚀 Starting fresh PM2 process..."
pm2 start ecosystem.config.js
pm2 save

echo "⏳ Waiting for app to start..."
sleep 5

echo "✅ Checking PM2 status..."
pm2 status

echo "🔍 Verifying application is running..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is responding on port 3000"
else
    echo "⚠️ Application might not be responding yet"
fi

echo "📋 Recent logs:"
pm2 logs umoren-ai --lines 10 --nostream

echo ""
echo "✅ Force deployment complete!"
echo "🌐 Check https://umoren.ai in a few seconds"
ENDSSH

echo ""
echo "✅ Deployment script completed!"
echo "🌐 Your site should be updated at https://umoren.ai"
echo ""
echo "💡 If you still see the old version:"
echo "   1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)"
echo "   2. Try incognito/private mode"
echo "   3. Clear browser cache for umoren.ai"

