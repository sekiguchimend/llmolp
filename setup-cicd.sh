#!/bin/bash

# Complete CI/CD Setup Script
# This script guides you through the entire setup process

set -e

BOLD='\033[1m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

EC2_HOST="43.206.102.223"
PEM_KEY="$HOME/Downloads/umoren_LP.pem"
GITHUB_REPO="https://github.com/QueueCorpJP/umoren-ai-landing"

echo -e "${BOLD}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BOLD}║     Umoren.ai CI/CD Setup Wizard                      ║${NC}"
echo -e "${BOLD}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Step 1: Check prerequisites
echo -e "${BLUE}[1/5]${NC} Checking prerequisites..."
echo ""

if [ ! -f "$PEM_KEY" ]; then
    echo -e "${RED}❌ PEM key not found at $PEM_KEY${NC}"
    exit 1
fi
echo -e "${GREEN}✓${NC} PEM key found"

if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓${NC} Git installed"

if ! command -v ssh &> /dev/null; then
    echo -e "${RED}❌ SSH not available${NC}"
    exit 1
fi
echo -e "${GREEN}✓${NC} SSH available"

echo -e "${GREEN}✓${NC} All prerequisites met!"
echo ""

# Step 2: Test SSH connection
echo -e "${BLUE}[2/5]${NC} Testing SSH connection to EC2..."
echo ""

if ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=10 ec2-user@$EC2_HOST "echo '✓ SSH connection successful'" 2>/dev/null; then
    echo -e "${GREEN}✓${NC} Successfully connected to EC2"
else
    echo -e "${RED}❌ Failed to connect to EC2${NC}"
    echo "Please check your network connection and PEM key permissions"
    exit 1
fi
echo ""

# Step 3: Check and install Git on EC2
echo -e "${BLUE}[3/5]${NC} Setting up Git on EC2..."
echo ""

# Check if git is installed
if ! ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no ec2-user@$EC2_HOST "command -v git" &> /dev/null; then
    echo -e "${YELLOW}Git not found on EC2. Installing...${NC}"
    ./install-git-ec2.sh
fi

# Step 4: Initialize Git repository on EC2
echo -e "${BLUE}[4/5]${NC} Initializing Git repository..."
echo ""

ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no ec2-user@$EC2_HOST << EOF
set -e
cd /home/ec2-user/llmolp

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin $GITHUB_REPO || git remote set-url origin $GITHUB_REPO
    git config user.email "deploy@umoren.ai"
    git config user.name "Umoren Deploy Bot"
else
    echo "Git already initialized"
    git remote set-url origin $GITHUB_REPO || git remote add origin $GITHUB_REPO
fi

# Fetch and checkout main
echo "Fetching latest code..."
git fetch origin main || git fetch origin master || echo "Could not fetch"
git checkout -B main origin/main || git checkout -B main || echo "Using local main"

echo "✓ Git setup complete on EC2"
EOF

echo -e "${GREEN}✓${NC} Git configured on EC2"
echo ""

# Step 5: Display GitHub Secrets
echo -e "${BLUE}[5/6]${NC} GitHub Secrets Configuration"
echo ""
echo -e "${YELLOW}You need to add these secrets to GitHub:${NC}"
echo ""
echo -e "${BOLD}Go to: ${GITHUB_REPO}/settings/secrets/actions${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${BOLD}Secret 1: EC2_HOST${NC}"
echo "Value: $EC2_HOST"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${BOLD}Secret 2: EC2_SSH_KEY${NC}"
echo "Copy the ENTIRE output below (including BEGIN/END lines):"
echo ""
cat "$PEM_KEY"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${BOLD}Secret 3: FIRECRAWL_BASE_URL${NC}"
echo "Value: http://43.206.139.47:3002"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

read -p "Press Enter after you've added all secrets to GitHub..."
echo ""

# Step 6: Final instructions
echo -e "${BLUE}[6/6]${NC} Ready to deploy!"
echo ""
echo -e "${YELLOW}To deploy your application:${NC}"
echo ""
echo "  git add ."
echo "  git commit -m 'feat: Add CI/CD pipeline'"
echo "  git push origin main"
echo ""
echo -e "${YELLOW}Then monitor the deployment:${NC}"
echo ""
echo "  ${GITHUB_REPO}/actions"
echo ""
echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ CI/CD Setup Complete!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
echo ""
echo "📚 Documentation:"
echo "  - Quick Start: ./QUICK_CICD_SETUP.md"
echo "  - Full Guide: ./CICD_SETUP.md"
echo "  - Secrets Guide: ./GITHUB_SECRETS_GUIDE.md"
echo ""
echo "🛠️  Useful commands:"
echo "  - Test SSH: ./test-ssh-connection.sh"
echo "  - View secrets: ./setup-github-secrets.sh"
echo "  - Check logs: ssh -i $PEM_KEY ec2-user@$EC2_HOST 'pm2 logs'"
echo ""
echo "🚀 Happy deploying!"
echo ""

