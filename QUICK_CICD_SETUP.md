# 🚀 Quick CI/CD Setup (5 Minutes)

Follow these steps to enable automatic deployments to your EC2 instance.

## ⚡ Quick Steps

### 1️⃣ Initialize Git on EC2 (1 minute)

Run this script to set up git on your EC2 instance:

```bash
./setup-ec2-git.sh
```test

When prompted, enter your GitHub repository URL:
```
https://github.com/YOUR_USERNAME/llmolp.git
```

### 2️⃣ Add GitHub Secrets (3 minutes)

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these 3 secrets:

| Secret Name | Value |
|-------------|-------|
| `EC2_HOST` | `43.206.102.223` |
| `EC2_SSH_KEY` | Run `cat ~/Downloads/umoren_LP.pem` and copy ALL content |
| `FIRECRAWL_BASE_URL` | `http://43.206.139.47:3002` |

**Helper command to see all values:**
```bash
./setup-github-secrets.sh
```

### 3️⃣ Push to Deploy (1 minute)

```bash
git add .
git commit -m "Add CI/CD workflows"
git push origin main
```

Then watch it deploy:
👉 https://github.com/YOUR_USERNAME/llmolp/actions

---

## ✅ That's It!

Every time you push to `main`, your site will automatically:
- ✓ Build
- ✓ Deploy to EC2
- ✓ Restart
- ✓ Go live

## 📊 Monitor Deployments

**GitHub Actions**: https://github.com/YOUR_USERNAME/llmolp/actions

**EC2 Logs**:
```bash
ssh -i ~/Downloads/umoren_LP.pem ec2-user@43.206.102.223 "pm2 logs umoren-ai"
```

**Live Site**: https://umoren.ai

---

## 🆘 Having Issues?

See detailed guides:
- [CICD_SETUP.md](./CICD_SETUP.md) - Complete setup guide
- [GITHUB_SECRETS_GUIDE.md](./GITHUB_SECRETS_GUIDE.md) - Secrets setup with screenshots

---

**Questions?** Check the troubleshooting section in [CICD_SETUP.md](./CICD_SETUP.md)

