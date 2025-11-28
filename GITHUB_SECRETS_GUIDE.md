# GitHub Secrets Quick Setup Guide

## 🔐 Secrets to Add

You need to add these 3 secrets to your GitHub repository for CI/CD to work.

### 📍 Where to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** button

---

## Secret 1: EC2_HOST

**Name**: `EC2_HOST`

**Value**:
```
43.206.102.223
```

---

## Secret 2: EC2_SSH_KEY

**Name**: `EC2_SSH_KEY`

**Value**: Copy the ENTIRE content from your PEM key

To view your PEM key, run this command in your terminal:
```bash
cat ~/Downloads/umoren_LP.pem
```

Or run the helper script:
```bash
./setup-github-secrets.sh
```

The value should look like this (copy ALL lines including BEGIN and END):
```
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAzzC4jklFly/SZEcn9oo1Y0n6Zk85sjUPkisiiWnjJ6TldSt+
duES4eL8OlE5XMk9hlIDvG84/vIARE2CuCYQ9MnHE4LUKOSuchVa4KvgkdkvR0d/
... (many more lines) ...
ZuqHYwKBgF2Y+ezDLW1nQS0ZqyqG2EcG3LU7FzUFP52PlAq2of1mYtj4r4NvpqYD
vqjMz4gbFX7bUmWsPQo0/ZOCHaNeN8T4KTTVEBdTvp08/5HF+yGVVCf/TZ6P5EFY
qqX8+KTPwtErH7SQn3fBCcUAIWzNqNsz8kPXM8SkxE2ZdrRoSS4n
-----END RSA PRIVATE KEY-----
```

**Important**: 
- ✅ Include the `-----BEGIN RSA PRIVATE KEY-----` line
- ✅ Include all the random characters in between
- ✅ Include the `-----END RSA PRIVATE KEY-----` line
- ❌ Don't add any extra spaces or newlines at the beginning/end

---

## Secret 3: FIRECRAWL_BASE_URL

**Name**: `FIRECRAWL_BASE_URL`

**Value**:
```
http://43.206.139.47:3002
```

---

## ✅ Verification Checklist

After adding all secrets, verify:

- [ ] EC2_HOST is set to: `43.206.102.223`
- [ ] EC2_SSH_KEY contains the complete PEM key (including BEGIN/END lines)
- [ ] FIRECRAWL_BASE_URL is set to: `http://43.206.139.47:3002`
- [ ] All three secrets appear in the "Repository secrets" list

---

## 🚀 Test the Setup

Once all secrets are added:

1. **Make a small change** to your code
2. **Commit and push** to the main branch:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin main
   ```
3. **Go to GitHub** → Your Repository → **Actions** tab
4. **Watch the deployment** happen in real-time!

---

## 🔍 Troubleshooting

### "Secret not found" error
- Make sure the secret names match EXACTLY (case-sensitive)
- Check there are no extra spaces in the secret names

### "Permission denied" during SSH
- Make sure you copied the ENTIRE PEM key including BEGIN/END lines
- Check there are no extra spaces or characters

### Deployment succeeds but site doesn't update
- SSH into EC2: `ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223`
- Check PM2 logs: `pm2 logs umoren-ai`
- Restart manually: `pm2 restart umoren-ai`

---

## 📞 Need Help?

1. Check the **Actions** tab on GitHub for detailed error logs
2. Review the [CICD_SETUP.md](./CICD_SETUP.md) for detailed instructions
3. SSH into your EC2 instance to check logs:
   ```bash
   ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223
   pm2 logs umoren-ai
   ```

---

**Ready?** Add the secrets and push to main! 🎉

