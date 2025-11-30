#!/bin/bash

# Troubleshooting script for deployment issues
# Run this on your EC2 instance: ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

echo "🔍 Umoren.ai Deployment Troubleshooting"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project directory. Changing to /home/ec2-user/llmolp..."
    cd /home/ec2-user/llmolp || exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Check git status
echo "📥 Git Status:"
git status --short
echo ""

# Check current commit
echo "🔖 Current commit:"
git log -1 --oneline
echo ""

# Check if .next directory exists and when it was last modified
echo "📦 Build artifacts:"
if [ -d ".next" ]; then
    echo "✅ .next directory exists"
    echo "   Last modified: $(stat -c %y .next | cut -d' ' -f1-2)"
else
    echo "❌ .next directory does not exist - build might be missing"
fi
echo ""

# Check PM2 status
echo "🔄 PM2 Status:"
pm2 status
echo ""

# Check if app is running on port 3000
echo "🌐 Port 3000 check:"
if netstat -tlnp 2>/dev/null | grep -q ":3000"; then
    echo "✅ Port 3000 is in use"
    netstat -tlnp 2>/dev/null | grep ":3000"
else
    echo "❌ Port 3000 is not in use - app might not be running"
fi
echo ""

# Check PM2 logs for errors
echo "📋 Recent PM2 logs (last 20 lines):"
pm2 logs umoren-ai --lines 20 --nostream
echo ""

# Check if app responds locally
echo "🔍 Testing localhost:3000:"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ App is responding on localhost:3000 (HTTP $HTTP_CODE)"
else
    echo "❌ App is NOT responding on localhost:3000 (HTTP $HTTP_CODE)"
fi
echo ""

# Check Nginx status
echo "🌐 Nginx Status:"
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running"
else
    echo "❌ Nginx is not running"
fi
echo ""

# Check Nginx configuration
echo "📋 Nginx config check:"
if [ -f "/etc/nginx/sites-enabled/umoren.ai" ]; then
    echo "✅ Nginx config exists"
    echo "   Proxy target:"
    grep -A 2 "proxy_pass" /etc/nginx/sites-enabled/umoren.ai | head -3
else
    echo "❌ Nginx config not found"
fi
echo ""

# Check disk space
echo "💾 Disk space:"
df -h / | tail -1
echo ""

# Check Node.js version
echo "📦 Node.js version:"
node --version
npm --version
echo ""

# Check if build script exists
echo "🔨 Build script check:"
if grep -q '"build"' package.json; then
    echo "✅ Build script found in package.json"
else
    echo "❌ Build script not found"
fi
echo ""

echo "========================================"
echo "💡 Quick fixes to try:"
echo ""
echo "1. Force rebuild and restart:"
echo "   rm -rf .next && npm run build && pm2 restart umoren-ai"
echo ""
echo "2. Complete restart:"
echo "   pm2 delete umoren-ai && pm2 start ecosystem.config.js"
echo ""
echo "3. Check for errors:"
echo "   pm2 logs umoren-ai --err"
echo ""
echo "4. Verify git is up to date:"
echo "   git fetch origin main && git log HEAD..origin/main"
echo ""

