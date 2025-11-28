#!/bin/bash

# GitHub Secrets Setup Script for CI/CD
# This script helps you set up GitHub secrets for automatic deployment

set -e

echo "🔐 GitHub Secrets Setup for Umoren.ai CI/CD"
echo "============================================"
echo ""
echo "You need to add the following secrets to your GitHub repository:"
echo ""
echo "Repository → Settings → Secrets and variables → Actions → New repository secret"
echo ""

# Get EC2 IP
EC2_IP="43.206.102.223"
echo "1️⃣  EC2_HOST"
echo "   Value: $EC2_IP"
echo ""

# Get PEM key
PEM_FILE="$HOME/Downloads/umoren_LP.pem"
if [ -f "$PEM_FILE" ]; then
    echo "2️⃣  EC2_SSH_KEY"
    echo "   Copy the ENTIRE content of your PEM key:"
    echo "   ---"
    cat "$PEM_FILE"
    echo "   ---"
    echo ""
else
    echo "❌ PEM file not found at $PEM_FILE"
    exit 1
fi

# Firecrawl URL
echo "3️⃣  FIRECRAWL_BASE_URL"
echo "   Value: http://43.206.139.47:3002"
echo ""

echo "============================================"
echo "📋 Summary of secrets to add:"
echo ""
echo "Secret Name           | Description"
echo "----------------------|------------------------"
echo "EC2_HOST              | EC2 instance public IP"
echo "EC2_SSH_KEY           | Private SSH key (PEM)"
echo "FIRECRAWL_BASE_URL    | Firecrawl API endpoint"
echo ""
echo "============================================"
echo ""
echo "After adding these secrets, push to main branch to trigger deployment:"
echo "  git add ."
echo "  git commit -m 'Add CI/CD workflow'"
echo "  git push origin main"
echo ""
echo "Then check deployment status at:"
echo "  https://github.com/YOUR_USERNAME/llmolp/actions"
echo ""

