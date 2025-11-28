# AWS EC2 Deployment Guide for Umoren.ai

This guide will help you deploy your Next.js landing page to AWS EC2 and configure your domain `umoren.ai`.

## Prerequisites

- AWS EC2 instance (Ubuntu 22.04 LTS recommended)
- Domain `umoren.ai` registered at onamae.com
- SSH access to your EC2 instance
- Basic knowledge of Linux commands

## Step 1: EC2 Instance Setup

### 1.1 Launch EC2 Instance

1. Go to AWS Console → EC2 → Launch Instance
2. Choose **Ubuntu Server 22.04 LTS**
3. Instance type: **t3.small** or **t3.medium** (minimum 2GB RAM)
4. Configure security group:
   - **HTTP (80)** - Allow from anywhere
   - **HTTPS (443)** - Allow from anywhere
   - **SSH (22)** - Allow from your IP
5. Create/select a key pair for SSH access
6. Launch instance

### 1.2 Connect to EC2 Instance

```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

## Step 2: Install Required Software

### 2.1 Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2 Install Node.js (v20 LTS)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # Should show v20.x.x
```

### 2.3 Install Nginx

```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2.4 Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

### 2.5 Install Certbot (for SSL)

```bash
sudo apt install -y certbot python3-certbot-nginx
```

## Step 3: Deploy Your Application

### 3.1 Clone Your Repository

```bash
cd /home/ubuntu
git clone https://github.com/your-username/llmolp.git
# OR upload files via SCP:
# scp -r -i your-key.pem /path/to/llmolp ubuntu@your-ec2-ip:/home/ubuntu/
```

### 3.2 Install Dependencies

```bash
cd llmolp
npm install
```

### 3.3 Build the Application

```bash
npm run build
```

### 3.4 Start with PM2

```bash
pm2 start npm --name "umoren-ai" -- start
pm2 save
pm2 startup  # Follow the instructions shown
```

## Step 4: Configure Nginx

### 4.1 Create Nginx Configuration

Create `/etc/nginx/sites-available/umoren.ai`:

```nginx
server {
    listen 80;
    server_name umoren.ai www.umoren.ai;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4.2 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/umoren.ai /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

## Step 5: Configure DNS at onamae.com

### 5.1 Get Your EC2 Public IP

```bash
# On EC2 instance
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

Or check in AWS Console → EC2 → Your Instance → Public IPv4 address

### 5.2 Configure DNS Records

Log in to **onamae.com** and go to DNS settings for `umoren.ai`:

**Add/Update Records:**

1. **A Record** (Root domain):
   - Type: `A`
   - Name: `@` or leave blank
   - Value: `YOUR_EC2_PUBLIC_IP`
   - TTL: `3600` (or default)

2. **A Record** (WWW subdomain):
   - Type: `A`
   - Name: `www`
   - Value: `YOUR_EC2_PUBLIC_IP`
   - TTL: `3600` (or default)

**Wait 5-10 minutes** for DNS propagation.

### 5.3 Verify DNS

```bash
# Check if DNS is pointing to your EC2
dig umoren.ai +short
dig www.umoren.ai +short
```

Both should return your EC2 public IP.

## Step 6: Setup SSL Certificate (HTTPS)

### 6.1 Obtain SSL Certificate

```bash
sudo certbot --nginx -d umoren.ai -d www.umoren.ai
```

Follow the prompts:
- Enter your email
- Agree to terms
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### 6.2 Auto-renewal Setup

Certbot automatically sets up auto-renewal. Test it:

```bash
sudo certbot renew --dry-run
```

## Step 7: Update Next.js Config for Production

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Optimizes for production
  // Add your domain for security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

Then rebuild:
```bash
npm run build
pm2 restart umoren-ai
```

## Step 8: Firewall Configuration

Ensure UFW (firewall) allows necessary ports:

```bash
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

## Step 9: Monitoring & Maintenance

### Check Application Status

```bash
pm2 status
pm2 logs umoren-ai
```

### Restart Application

```bash
pm2 restart umoren-ai
```

### Update Application

```bash
cd /home/ubuntu/llmolp
git pull  # If using git
npm install
npm run build
pm2 restart umoren-ai
```

## Troubleshooting

### Check Nginx Logs

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Check Application Logs

```bash
pm2 logs umoren-ai
```

### Check if Port 3000 is Running

```bash
sudo netstat -tlnp | grep 3000
```

### Restart Services

```bash
sudo systemctl restart nginx
pm2 restart umoren-ai
```

## Security Checklist

- [ ] EC2 security group only allows necessary ports
- [ ] SSH key is secured (not shared publicly)
- [ ] SSL certificate is installed and auto-renewing
- [ ] Firewall (UFW) is enabled
- [ ] Regular system updates: `sudo apt update && sudo apt upgrade`
- [ ] PM2 is configured to auto-start on reboot

## Cost Optimization

- Use **t3.small** for development/testing
- Consider **Reserved Instances** for production (1-year term saves ~40%)
- Set up **CloudWatch alarms** for monitoring
- Use **Elastic IP** if you need a static IP (free if attached to running instance)

## Next Steps

1. Set up automated deployments (GitHub Actions, GitLab CI, etc.)
2. Configure CloudWatch for monitoring
3. Set up automated backups
4. Consider using AWS Route 53 instead of onamae.com DNS (optional)

---

**Your site should now be live at:** `https://umoren.ai` 🚀

