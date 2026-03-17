# DrawSpark Deployment Guide

## Quick Deployment Options

### Option 1: Railway (Recommended - Easiest)
1. Go to https://railway.app
2. Create free account or sign in
3. Click "New Project" → "Deploy from GitHub"
4. Select `Integral-standard/drawspark`
5. Railway auto-detects Node.js
6. Click "Deploy"
7. Get public URL (e.g., https://drawspark.up.railway.app)

**Free Tier:** Up to $5/month credit, suitable for small projects

---

### Option 2: Render (Alternative)
1. Go to https://render.com
2. Create free account
3. Click "New" → "Web Service"
4. Connect GitHub repo: `Integral-standard/drawspark`
5. Build command: `npm install`
6. Start command: `node server.js`
7. Click "Deploy Web Service"

**Free Tier:** Limited free tier with cold starts

---

### Option 3: Vercel (Best for static + API)
1. Install CLI: `npm i -g vercel`
2. Run: `vercel login`
3. Run: `vercel deploy`
4. Follow prompts

**Free Tier:** Generous, fast, great performance

---

### Option 4: Self-Hosted (Local Development)
1. Install dependencies: `npm install`
2. Run server: `npm start`
3. Access at: http://localhost:3000

**Best for:** Development, testing, private use

---

## Environment Variables

No environment variables required for MVP. Future enhancements may need:

- `OLLAMA_API_URL`: For AI generation integration
- `DATABASE_URL`: For user accounts and prompt saving
- `JWT_SECRET`: For authentication

---

## Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify prompt generation works
- [ ] Check content safety filters
- [ ] Set up monitoring/error tracking
- [ ] Configure analytics
- [ ] Test on mobile devices
- [ ] Verify HTTPS is enabled
- [ ] Set up custom domain (optional)

---

## Custom Domain Setup

### Railway
1. Go to project settings
2. Add domain: `drawspark.yourdomain.com`
3. Configure DNS (CNAME record)
4. Enable HTTPS

### Render
1. Go to service settings
2. Add custom domain
3. Configure DNS
4. Enable automatic HTTPS

### Vercel
1. Run: `vercel domains add drawspark.yourdomain.com`
2. Configure DNS
3. Vercel handles HTTPS automatically

---

## Monitoring & Analytics

### Uptime Monitoring
- **UptimeRobot**: Free, checks every 5 minutes
- **Pingdom**: Paid, more features
- **StatusPage.io**: For public status page

### Analytics
- **Google Analytics**: Free, comprehensive
- **Plausible**: Privacy-focused, paid
- **Simple Analytics**: Minimal, paid

### Error Tracking
- **Sentry**: Free tier for small projects
- **Rollbar**: Paid, good features
- **LogRocket**: Session replay, paid

---

## Scaling

### When to Scale Up
- > 1000 daily users
- Slow response times
- High CPU/RAM usage
- Frequent rate limiting

### Scaling Options
1. **Railway Pro**: Starts at $5/month
2. **Render Pro**: Starts at $7/month
3. **Vercel Pro**: Starts at $20/month
4. **DigitalOcean**: $5/month VPS, self-managed

---

## Backup & Recovery

### Database Backups (when implemented)
- Enable automated backups (daily)
- Export backups weekly
- Test restore process monthly

### Code Backups
- All code on GitHub (automatic)
- Local workspace backups (hourly via backup.ps1)

---

## Cost Projections

### Free Tier Limits
- **Railway**: 512MB RAM, $5/month credit
- **Render**: 512MB RAM, 750 hours/month
- **Vercel**: 100GB bandwidth, unlimited deployments

### Paid Tier (when needed)
- **Railway Pro**: $5/month - 512MB RAM, 1 CPU
- **Render Pro**: $7/month - 512MB RAM, 0.1 CPU
- **Vercel Pro**: $20/month - unlimited bandwidth

### Estimated Costs
- **MVP**: $0/month (free tiers)
- **100 users**: $0-$5/month
- **1000 users**: $5-$20/month
- **10,000 users**: $20-$100/month

---

## Troubleshooting

### Build Fails
- Check `package.json` scripts
- Verify dependencies in `package-lock.json`
- Check build logs for specific errors

### Runtime Errors
- Check server logs
- Verify environment variables
- Check port conflicts (should use 3000 or PORT env var)

### Deployment Slow
- Free tiers have cold starts (normal)
- Upgrade to paid tier for instant response
- Optimize code and dependencies

---

## Security Checklist

- [ ] HTTPS enabled
- [ ] No hardcoded secrets
- [ ] Content security headers
- [ ] Rate limiting
- [ ] Input validation
- [ ] SQL injection prevention (if using database)
- [ ] XSS prevention
- [ ] Regular dependency updates

---

_Last Updated: 2026-03-17_
