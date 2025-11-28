# Deployment Summary - Umoren.ai

## ✅ Deployment Complete!

Your Next.js landing page has been successfully deployed to AWS EC2.

### Instance Information
- **Instance ID**: `i-0cb4edfffcde4da75`
- **Public IP**: `43.206.102.223`
- **Instance Type**: `t2.xlarge`
- **OS**: Amazon Linux 2023
- **Region**: ap-northeast-1 (Tokyo)

### What's Been Configured

✅ **Node.js 20** - Installed and configured
✅ **Nginx** - Web server configured and running
✅ **PM2** - Process manager running application
✅ **PM2 Auto-start** - Configured to start on reboot
✅ **Application** - Built and running on port 3000
✅ **Security Group** - HTTP (80) and HTTPS (443) ports opened
✅ **Nginx Proxy** - Configured to proxy requests to Node.js app

### Current Status

🌐 **Application URL**: http://43.206.102.223
📊 **PM2 Status**: Running (check with `pm2 status`)
🔧 **Nginx Status**: Running (check with `sudo systemctl status nginx`)

### Next Steps

#### 1. Configure DNS at onamae.com

You need to add DNS records pointing to your EC2 instance:

**A Records to Add:**
- `@` (root) → `43.206.102.223`
- `www` → `43.206.102.223`

See `DNS_SETUP.md` for detailed instructions.

#### 2. Setup SSL Certificate (After DNS Propagation)

Once DNS is configured and propagated (5-10 minutes), run:

```bash
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223
sudo certbot --nginx -d umoren.ai -d www.umoren.ai
```

#### 3. Verify Everything Works

After DNS and SSL are configured:
- Visit: https://umoren.ai
- Test the contact form
- Check PM2 logs: `pm2 logs umoren-ai`

### Useful Commands

#### SSH into Server
```bash
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223
```

#### Check Application Status
```bash
pm2 status
pm2 logs umoren-ai
```

#### Restart Application
```bash
pm2 restart umoren-ai
```

#### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
```

#### View Nginx Logs
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

#### Update Application (After making changes)
```bash
cd /home/ec2-user/llmolp
git pull  # if using git
npm install
npm run build
pm2 restart umoren-ai
```

### Files Location

- **Application**: `/home/ec2-user/llmolp`
- **Nginx Config**: `/etc/nginx/conf.d/umoren.ai.conf`
- **PM2 Config**: `/home/ec2-user/llmolp/ecosystem.config.js`
- **PM2 Logs**: `/home/ec2-user/.pm2/logs/`

### Security Notes

- ✅ Security group configured with minimal required ports
- ✅ SSH access limited to your IP
- ⏳ SSL certificate will be added after DNS setup
- ⚠️ Remember to set Supabase environment variables if needed:
  ```bash
  # Add to /home/ec2-user/llmolp/.env.local
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
  ```

### Troubleshooting

If the site is not accessible:
1. Check PM2: `pm2 status`
2. Check Nginx: `sudo systemctl status nginx`
3. Check logs: `pm2 logs umoren-ai`
4. Verify security group allows ports 80 and 443
5. Check DNS propagation: `dig umoren.ai +short`

---

**Your site is ready! Just configure DNS and SSL to go live.** 🚀

