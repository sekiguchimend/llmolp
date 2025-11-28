#!/bin/bash

# Deployment script for Umoren.ai
# Run this script on your EC2 instance after initial setup

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /home/ubuntu/llmolp || exit

# Pull latest changes (if using git)
# git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart umoren-ai || pm2 start ecosystem.config.js

# Check status
echo "✅ Deployment complete!"
pm2 status
pm2 logs umoren-ai --lines 20

echo "🌐 Your site should be live at https://umoren.ai"

