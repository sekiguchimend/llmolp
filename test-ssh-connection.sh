#!/bin/bash

# Quick SSH connection test script

set -e

EC2_HOST="43.206.102.223"
PEM_KEY="$HOME/Downloads/umoren_LP.pem"

echo "🔍 Testing SSH connection to EC2..."
echo ""

# Check if PEM key exists
if [ ! -f "$PEM_KEY" ]; then
    echo "❌ PEM key not found at $PEM_KEY"
    exit 1
fi

echo "✓ PEM key found"

# Test SSH connection
echo "🔗 Connecting to ec2-user@$EC2_HOST..."
echo ""

ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=10 ec2-user@$EC2_HOST << 'EOF'
echo "✅ SSH connection successful!"
echo ""
echo "📊 System Information:"
echo "===================="
echo "User: $(whoami)"
echo "Hostname: $(hostname)"
echo "Working directory: $(pwd)"
echo ""
echo "📦 Software Versions:"
echo "===================="
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"
echo "PM2: $(pm2 --version 2>/dev/null || echo 'Not installed')"
echo "Git: $(git --version)"
echo ""
echo "📁 Project Status:"
echo "===================="
if [ -d "/home/ec2-user/llmolp" ]; then
    cd /home/ec2-user/llmolp
    echo "Project directory: ✓ Exists"
    if [ -d ".git" ]; then
        echo "Git repository: ✓ Initialized"
        echo "Current branch: $(git branch --show-current)"
        echo "Latest commit: $(git log -1 --oneline 2>/dev/null || echo 'No commits')"
    else
        echo "Git repository: ✗ Not initialized"
    fi
    if [ -f "package.json" ]; then
        echo "package.json: ✓ Found"
    fi
    if [ -d "node_modules" ]; then
        echo "node_modules: ✓ Installed"
    else
        echo "node_modules: ✗ Not installed"
    fi
    if [ -d ".next" ]; then
        echo "Build: ✓ Exists"
    else
        echo "Build: ✗ Not built"
    fi
else
    echo "Project directory: ✗ Not found"
fi
echo ""
echo "🔄 PM2 Status:"
echo "===================="
pm2 status 2>/dev/null || echo "No PM2 processes running"
echo ""
EOF

echo ""
echo "✅ Connection test complete!"
echo ""
echo "🎯 Next steps:"
echo "1. If git is not initialized, run: ./setup-ec2-git.sh"
echo "2. Add GitHub secrets: See GITHUB_SECRETS_GUIDE.md"
echo "3. Push to deploy: git push origin main"
echo ""

