# Quick Deployment Checklist

## Initial Setup (One-time)

1. **EC2 Instance**
   - Launch Ubuntu 22.04 LTS (t3.small minimum)
   - Security Group: Allow 80, 443, 22
   - Note your Public IP

2. **SSH into EC2**
   ```bash
   ssh -i your-key.pem ubuntu@YOUR_EC2_IP
   ```

3. **Install Software**
   ```bash
   sudo apt update && sudo apt upgrade -y
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs nginx certbot python3-certbot-nginx
   sudo npm install -g pm2
   ```

4. **Upload Project**
   ```bash
   # On your local machine:
   scp -r -i your-key.pem /path/to/llmolp ubuntu@YOUR_EC2_IP:/home/ubuntu/
   
   # On EC2:
   cd /home/ubuntu/llmolp
   npm install
   npm run build
   ```

5. **Start Application**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup  # Follow instructions
   ```

6. **Configure Nginx**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/umoren.ai
   sudo ln -s /etc/nginx/sites-available/umoren.ai /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

7. **Configure DNS at onamae.com**
   - Add A record: `@` → `YOUR_EC2_IP`
   - Add A record: `www` → `YOUR_EC2_IP`
   - Wait 5-10 minutes

8. **Setup SSL**
   ```bash
   sudo certbot --nginx -d umoren.ai -d www.umoren.ai
   ```

## Regular Updates

```bash
cd /home/ubuntu/llmolp
./deploy.sh
```

Or manually:
```bash
cd /home/ubuntu/llmolp
git pull  # if using git
npm install
npm run build
pm2 restart umoren-ai
```

## Useful Commands

```bash
# Check app status
pm2 status
pm2 logs umoren-ai

# Restart app
pm2 restart umoren-ai

# Check Nginx
sudo systemctl status nginx
sudo nginx -t

# Check SSL renewal
sudo certbot renew --dry-run
```

