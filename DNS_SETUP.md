# DNS Configuration for umoren.ai

## Your EC2 Instance Details
- **Public IP Address**: `43.206.102.223`
- **Instance ID**: `i-0cb4edfffcde4da75`

## DNS Configuration Steps at onamae.com

### Step 1: Log in to onamae.com
1. Go to https://onamae.com
2. Log in with your account credentials

### Step 2: Navigate to DNS Settings
1. Find your domain `umoren.ai` in the domain list
2. Click on "DNS設定" (DNS Settings) or "ネームサーバー設定" (Name Server Settings)

### Step 3: Add/Update A Records

You need to add **2 A records**:

#### Record 1: Root Domain
- **Type**: `A`
- **Name**: `@` (or leave blank/空白)
- **Value**: `43.206.102.223`
- **TTL**: `3600` (or default)

#### Record 2: WWW Subdomain
- **Type**: `A`
- **Name**: `www`
- **Value**: `43.206.102.223`
- **TTL**: `3600` (or default)

### Step 4: Save Changes
- Click "保存" (Save) or "適用" (Apply)
- Wait 5-10 minutes for DNS propagation

### Step 5: Verify DNS Propagation

After saving, verify DNS is working:

```bash
# Check if DNS is pointing to your EC2
dig umoren.ai +short
dig www.umoren.ai +short
```

Both commands should return: `43.206.102.223`

Or use online tools:
- https://www.whatsmydns.net/#A/umoren.ai
- https://dnschecker.org/#A/umoren.ai

### Step 6: Setup SSL Certificate

Once DNS is propagated (both `umoren.ai` and `www.umoren.ai` point to `43.206.102.223`), run:

```bash
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223
sudo certbot --nginx -d umoren.ai -d www.umoren.ai
```

Follow the prompts:
- Enter your email address
- Agree to terms (Y)
- Choose whether to redirect HTTP to HTTPS (recommended: 2 for redirect)

### Step 7: Verify SSL Auto-renewal

```bash
sudo certbot renew --dry-run
```

---

## Current Status

✅ **Application**: Running on port 3000
✅ **Nginx**: Configured and running
✅ **PM2**: Application managed and auto-start enabled
⏳ **DNS**: Waiting for you to configure at onamae.com
⏳ **SSL**: Will be set up after DNS propagation

## After DNS is Configured

Once DNS is pointing to your EC2 instance, your site will be accessible at:
- **HTTP**: http://umoren.ai
- **HTTPS**: https://umoren.ai (after SSL setup)

---

**Next Steps:**
1. Configure DNS at onamae.com (see steps above)
2. Wait 5-10 minutes for DNS propagation
3. Run SSL certificate setup command
4. Your site will be live! 🚀

