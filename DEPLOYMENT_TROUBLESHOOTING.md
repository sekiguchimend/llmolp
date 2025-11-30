# Deployment Troubleshooting Guide

## Why isn't my frontend updating on umoren.ai?

Even if GitHub Actions shows a successful deployment, your frontend might not update due to several common issues. Here's how to diagnose and fix them.

## Common Causes

### 1. **Browser Caching** (Most Common)
Your browser might be showing cached content.

**Solution:**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache for umoren.ai
- Try incognito/private mode
- Check in a different browser

### 2. **PM2 Not Restarting Properly**
PM2 might be running the old build.

**Solution:**
```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Stop and delete the process
pm2 delete umoren-ai

# Start fresh
cd /home/ec2-user/llmolp
pm2 start ecosystem.config.js
pm2 save

# Check status
pm2 status
pm2 logs umoren-ai
```

### 3. **Build Cache Issues**
Next.js might be using cached build artifacts.

**Solution:**
```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

cd /home/ec2-user/llmolp

# Clear cache and rebuild
rm -rf .next
rm -rf node_modules/.cache
npm run build

# Restart PM2
pm2 restart umoren-ai
```

### 4. **Git Not Pulling Latest Code**
The EC2 instance might not have the latest code.

**Solution:**
```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

cd /home/ec2-user/llmolp

# Check current commit
git log -1 --oneline

# Pull latest
git fetch origin main
git reset --hard origin/main

# Rebuild
npm run build
pm2 restart umoren-ai
```

### 5. **Nginx Caching**
Nginx might be caching responses.

**Solution:**
```bash
# SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

## Quick Diagnostic Script

Run the troubleshooting script on your EC2 instance:

```bash
# Copy script to EC2
scp -i ~/Downloads/umoren_LP.pem troubleshoot-deployment.sh ec2-user@43.206.102.223:/home/ec2-user/llmolp/

# SSH and run
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223
cd /home/ec2-user/llmolp
chmod +x troubleshoot-deployment.sh
./troubleshoot-deployment.sh
```

## Step-by-Step Fix

If your site isn't updating, try this complete reset:

```bash
# 1. SSH into EC2
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223

# 2. Navigate to project
cd /home/ec2-user/llmolp

# 3. Pull latest code
git fetch origin main
git reset --hard origin/main

# 4. Clear all caches
rm -rf .next
rm -rf node_modules/.cache
rm -rf node_modules
npm cache clean --force

# 5. Reinstall dependencies
npm ci --production=false

# 6. Rebuild
npm run build

# 7. Restart PM2 completely
pm2 delete umoren-ai
pm2 start ecosystem.config.js
pm2 save

# 8. Verify
pm2 status
curl http://localhost:3000
```

## Verify Deployment

After fixing, verify the deployment:

1. **Check PM2 status:**
   ```bash
   pm2 status
   pm2 logs umoren-ai --lines 50
   ```

2. **Test locally on EC2:**
   ```bash
   curl http://localhost:3000
   ```

3. **Check from your local machine:**
   ```bash
   curl https://umoren.ai
   ```

4. **Check in browser:**
   - Open https://umoren.ai in incognito mode
   - Hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`

## Updated Deployment Workflow

The GitHub Actions workflow has been updated to:
- ✅ Clear `.next` cache before building
- ✅ Stop and delete PM2 process before restarting
- ✅ Verify the app is responding after deployment
- ✅ Better error reporting

## Check GitHub Actions Logs

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Click on the latest workflow run
4. Check each step for errors:
   - Look for red ✗ marks
   - Expand failed steps to see error messages
   - Check the "Deploy to EC2" step logs

## Still Not Working?

If none of the above fixes work:

1. **Check PM2 logs for errors:**
   ```bash
   pm2 logs umoren-ai --err --lines 100
   ```

2. **Check Nginx logs:**
   ```bash
   sudo tail -100 /var/log/nginx/error.log
   ```

3. **Verify the build succeeded:**
   ```bash
   ls -la .next/
   ```

4. **Check if port 3000 is accessible:**
   ```bash
   netstat -tlnp | grep 3000
   ```

5. **Test the app directly:**
   ```bash
   cd /home/ec2-user/llmolp
   npm start
   # Then test: curl http://localhost:3000
   ```

## Prevention

To prevent this issue in the future:

1. **Always clear cache in deployment:**
   The updated workflow now clears `.next` before building

2. **Use cache-busting headers:**
   The `next.config.ts` has been updated with proper cache headers

3. **Monitor deployments:**
   Check GitHub Actions logs after each push

4. **Set up alerts:**
   Consider adding Slack/Discord notifications for failed deployments

---

**Need more help?** Check the logs and share the error messages for further assistance.

