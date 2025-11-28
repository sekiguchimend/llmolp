#!/bin/bash

# EC2 Git Setup Script
# This script initializes git on your EC2 instance for CI/CD

set -e

EC2_HOST="43.206.102.223"
PEM_KEY="$HOME/Downloads/umoren_LP.pem"

echo "🚀 Setting up Git on EC2 instance..."
echo ""

# Check if PEM key exists
if [ ! -f "$PEM_KEY" ]; then
    echo "❌ PEM key not found at $PEM_KEY"
    exit 1
fi

echo "📝 You'll need your GitHub repository URL"
echo "   Format: https://github.com/USERNAME/REPO.git"
echo ""
read -p "Enter your GitHub repository URL (default: https://github.com/QueueCorpJP/umoren-ai-landing.git): " REPO_URL
REPO_URL=${REPO_URL:-https://github.com/QueueCorpJP/umoren-ai-landing.git}

if [ -z "$REPO_URL" ]; then
    echo "❌ Repository URL is required"
    exit 1
fi

echo ""
echo "🔧 Connecting to EC2 and setting up git..."
echo ""

ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no ec2-user@$EC2_HOST << EOF
set -e

echo "📂 Current directory contents:"
ls -la /home/ec2-user/llmolp

echo ""
echo "🔧 Setting up git configuration..."
cd /home/ec2-user/llmolp

# Initialize git if needed
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin $REPO_URL
else
    echo "Git already initialized"
    # Update remote URL
    git remote set-url origin $REPO_URL || git remote add origin $REPO_URL
fi

# Set git config
git config user.email "deploy@umoren.ai"
git config user.name "Umoren Deploy Bot"

# Fetch latest code
echo ""
echo "📥 Fetching latest code from GitHub..."
git fetch origin main || git fetch origin master

# Checkout main branch
echo "🔀 Checking out main branch..."
git checkout -B main origin/main || git checkout -B main origin/master || echo "Using local main branch"

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main || git pull origin master || echo "Already up to date"

echo ""
echo "✅ Git setup complete!"
echo ""
echo "📊 Current status:"
git status
echo ""
git log --oneline -5 || echo "No commits yet"

EOF

echo ""
echo "✅ EC2 Git setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Add GitHub secrets (see CICD_SETUP.md)"
echo "2. Push your code to trigger deployment:"
echo "   git add ."
echo "   git commit -m 'Setup CI/CD'"
echo "   git push origin main"
echo ""

