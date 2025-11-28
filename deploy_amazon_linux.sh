#!/bin/bash

# Deployment script for Amazon Linux 2023
set -e

echo "🚀 Starting deployment on Amazon Linux 2023..."

# Update system
echo "📦 Updating system packages..."
sudo yum update -y

# Install Node.js 20
echo "📦 Installing Node.js 20..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# Install Nginx
echo "📦 Installing Nginx..."
sudo yum install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Certbot
echo "📦 Installing Certbot..."
sudo yum install -y certbot python3-certbot-nginx

# Navigate to project directory
cd /home/ec2-user/llmolp || exit

# Install dependencies
echo "📦 Installing project dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js || pm2 restart umoren-ai
pm2 save
pm2 startup systemd -u ec2-user --hp /home/ec2-user | sudo bash

echo "✅ Deployment complete!"
pm2 status

