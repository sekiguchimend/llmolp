# GitHub Actions CI/CD Setup Guide

## Overview

This guide will help you set up automated deployments to your AWS EC2 instance using GitHub Actions. Every time you push to the `main` branch, your application will automatically build and deploy.

## ✅ Prerequisites Verified

- **EC2 Instance**: `i-0cb4edfffcde4da75`
- **Public IP**: `43.206.102.223`
- **SSH Key**: `~/Downloads/umoren_LP.pem`
- **Node.js**: v20.19.6 ✓
- **PM2**: v6.0.14 ✓
- **User**: `ec2-user`
- **Project Path**: `/home/ec2-user/llmolp`

## 📁 Files Created

The following CI/CD files have been added to your repository:

1. `.github/workflows/deploy.yml` - Main deployment workflow
2. `.github/workflows/test.yml` - Test build workflow for PRs
3. `setup-github-secrets.sh` - Helper script to display secrets

## 🔐 Step 1: Add GitHub Secrets

You need to add three secrets to your GitHub repository:

### Navigate to GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

### Add These Secrets

#### Secret 1: `EC2_HOST`
- **Name**: `EC2_HOST`
- **Value**: `43.206.102.223`

#### Secret 2: `EC2_SSH_KEY`
- **Name**: `EC2_SSH_KEY`
- **Value**: Copy the ENTIRE content of your PEM key (including BEGIN and END lines)

Run this to see the key:
```bash
cat ~/Downloads/umoren_LP.pem
```

Or use the helper script:
```bash
./setup-github-secrets.sh
```

The key should look like:
```
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAzzC4jklFly/SZEcn9oo1Y0n...
... (many lines) ...
-----END RSA PRIVATE KEY-----
```

#### Secret 3: `FIRECRAWL_BASE_URL`
- **Name**: `FIRECRAWL_BASE_URL`
- **Value**: `http://43.206.139.47:3002`

### Verify Secrets

After adding all secrets, you should see:
- ✓ EC2_HOST
- ✓ EC2_SSH_KEY
- ✓ FIRECRAWL_BASE_URL

## 🚀 Step 2: Initialize Git Repository on EC2

Before the first deployment, ensure the project is set up on EC2:

```bash
# SSH into your EC2 instance
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Navigate to project directory (or create it)
cd /home/ec2-user
ls -la llmolp  # Check if directory exists

# If directory doesn't exist, clone your repository:
# git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git llmolp

# OR if you need to initialize from scratch:
# mkdir -p llmolp
# cd llmolp
# git init
# git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Make sure you're in the project directory
cd /home/ec2-user/llmolp

# Set up git (if not already done)
git config --global user.email "your@email.com"
git config --global user.name "Your Name"

# Pull latest code
git fetch origin main
git checkout main
git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow the instructions if needed
```

## 📝 Step 3: Commit and Push Workflows

From your local machine:

```bash
cd /Users/einarsoderberg/a/llmolp

# Check what files are new/changed
git status

# Add the workflow files
git add .github/workflows/
git add setup-github-secrets.sh
git add CICD_SETUP.md

# Commit
git commit -m "Add GitHub Actions CI/CD workflows"

# Push to main branch (this will trigger the first deployment!)
git push origin main
```

## 🔍 Step 4: Monitor Deployment

After pushing to main:

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow run called "Deploy to AWS EC2"
4. Click on it to see the real-time logs
5. Wait for the green checkmark ✓

The deployment workflow will:
1. ✓ Checkout code
2. ✓ Setup Node.js
3. ✓ Install dependencies
4. ✓ Build application
5. ✓ Deploy to EC2 via SSH
6. ✓ Restart PM2
7. ✓ Verify deployment

## 🎯 How It Works

### Automatic Deployment (Main Branch)

Every push to `main` triggers:
- Build the application
- Deploy to EC2 via SSH
- Restart PM2 process
- Verify the site is live

### Test Builds (Pull Requests)

Pull requests and feature branches trigger:
- Install dependencies
- Run linter
- Build application
- Test the build output

## 🔄 Deployment Process

When you push to main, the GitHub Actions workflow:

```bash
# 1. Connects to EC2
ssh ec2-user@43.206.102.223

# 2. Pulls latest code
cd /home/ec2-user/llmolp
git pull origin main

# 3. Installs dependencies
npm ci --production=false

# 4. Builds application
npm run build

# 5. Restarts PM2
pm2 restart umoren-ai

# 6. Verifies deployment
curl https://umoren.ai
```

## 🛠️ Manual Deployment

If you need to deploy manually (without GitHub Actions):

```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Run the deployment script
cd /home/ec2-user/llmolp
./deploy.sh
```

## 📊 Monitoring

### Check Deployment Status

```bash
# On EC2
pm2 status
pm2 logs umoren-ai
pm2 monit  # Real-time monitoring
```

### Check Build Logs on GitHub

1. Go to repository → **Actions** tab
2. Click on the latest workflow run
3. Expand each step to see detailed logs

## 🔧 Troubleshooting

### Deployment Fails with "Permission denied"

Make sure the SSH key secret includes the entire PEM file content:
```bash
cat ~/Downloads/umoren_LP.pem
# Copy ALL lines including BEGIN and END
```

### Git Pull Fails on EC2

```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Check git status
cd /home/ec2-user/llmolp
git status

# If there are conflicts, reset to remote
git fetch origin main
git reset --hard origin/main
```

### PM2 Process Not Starting

```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Delete PM2 process and restart
pm2 delete umoren-ai
pm2 start ecosystem.config.js
pm2 save
```

### Build Fails

Check the GitHub Actions logs:
1. Go to **Actions** tab
2. Click the failed workflow
3. Look for the red ✗ step
4. Expand it to see the error

Common issues:
- Missing dependencies: Run `npm install` locally first
- Build errors: Test `npm run build` locally
- Environment variables: Check secrets are set correctly

## 🎨 Customizing Workflows

### Deploy to Different Branch

Edit `.github/workflows/deploy.yml`:
```yaml
on:
  push:
    branches:
      - main
      - production  # Add other branches
```

### Deploy on Schedule

Add a schedule trigger:
```yaml
on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 2 * * *'  # Deploy daily at 2 AM UTC
```

### Deploy on Tag

Deploy when you create a version tag:
```yaml
on:
  push:
    tags:
      - 'v*'  # Matches v1.0.0, v2.1.3, etc.
```

## 📈 Next Steps

1. ✓ Set up GitHub secrets
2. ✓ Initialize git on EC2
3. ✓ Push workflows to GitHub
4. ✓ Monitor first deployment
5. Consider adding:
   - Slack/Discord notifications
   - Automated tests before deployment
   - Blue-green deployments
   - Rollback mechanisms
   - CloudWatch monitoring

## 🔗 Quick Links

- **GitHub Actions**: https://github.com/YOUR_USERNAME/llmolp/actions
- **EC2 Instance**: `ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223`
- **Live Site**: https://umoren.ai
- **PM2 Logs**: `ssh ec2-user@43.206.102.223 -i ~/Downloads/umoren_LP.pem "pm2 logs umoren-ai"`

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Check PM2 logs on EC2
3. Verify all secrets are set correctly
4. Ensure EC2 security group allows SSH (port 22)

---

**Ready to deploy?** Push to main and watch the magic happen! 🚀

