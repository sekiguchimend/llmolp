#!/bin/bash

# Install Git on Amazon Linux 2023 EC2 instance

set -e

EC2_HOST="43.206.102.223"
PEM_KEY="$HOME/Downloads/umoren_LP.pem"

echo "🔧 Installing Git on EC2 instance..."
echo ""

ssh -i "$PEM_KEY" -o StrictHostKeyChecking=no ec2-user@$EC2_HOST << 'EOF'
set -e

echo "📦 Updating package manager..."
sudo dnf update -y

echo "📦 Installing Git..."
sudo dnf install -y git

echo "✓ Git installed successfully!"
echo ""
echo "Git version: $(git --version)"

EOF

echo ""
echo "✅ Git installation complete!"
echo ""
echo "🎯 Next step: Run ./setup-ec2-git.sh to configure the repository"
echo ""

