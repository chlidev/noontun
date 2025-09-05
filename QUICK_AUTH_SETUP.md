# 🚀 Quick Authentication Setup Guide
# For Noontun Analytics - Indonesian SME Data Platform

## 📋 Prerequisites Checklist
- [x] Node.js 18+ installed
- [x] npm package manager
- [x] Development server running (npm run dev)
- [ ] PostgreSQL database (choose option below)

## 🗄️ Database Setup Options

### Option 1: Docker (Preferred - if Docker Desktop is running)
```bash
# Start Docker Desktop first, then run:
docker run --name postgres-noontun \
  -e POSTGRES_DB=noontun_analytics \
  -e POSTGRES_USER=noontun_user \
  -e POSTGRES_PASSWORD=noontun_pass_2024 \
  -p 5432:5432 \
  -d postgres:15
```

### Option 2: Native PostgreSQL Installation
1. **Download & Install:**
   - Go to: https://www.postgresql.org/download/windows/
   - Download PostgreSQL 15 installer
   - Install with default settings
   - Remember the password for 'postgres' user

2. **Create Database:**
   ```sql
   -- Open pgAdmin or psql and run:
   CREATE DATABASE noontun_analytics;
   CREATE USER noontun_user WITH ENCRYPTED PASSWORD 'noontun_pass_2024';
   GRANT ALL PRIVILEGES ON DATABASE noontun_analytics TO noontun_user;
   ALTER USER noontun_user CREATEDB;
   ```

### Option 3: Online PostgreSQL (For Testing)
- **Supabase:** https://supabase.com (Free tier available)
- **Railway:** https://railway.app (Free tier available)
- **Aiven:** https://aiven.io (Free tier available)

## 🔐 Environment Configuration
✅ **Already Done:** `.env.local` file created with:
- Secure authentication secrets
- Database connection string
- Indonesian localization settings

## 🛠️ Prisma Setup Commands

```bash
# 1. Generate Prisma client
npx prisma generate

# 2. Create database tables
npx prisma db push

# 3. Optional: View database in browser
npx prisma studio
```

## 🧪 Authentication Testing

### Quick Test (On Homepage)
1. Go to: http://localhost:3000
2. Scroll down to see **Authentication Test Panel**
3. Test the authentication flow

### Manual Testing Steps
1. **Register New User:**
   - Go to: http://localhost:3000/register
   - Email: test@noontun.com
   - Password: TestPass123!
   - Name: Test User

2. **Login:**
   - Go to: http://localhost:3000/login
   - Use the same credentials

3. **Dashboard Access:**
   - Should auto-redirect to: http://localhost:3000/dashboard
   - Verify user greeting in Indonesian
   - Test navigation between modules

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check if database is running
# For Docker:
docker ps

# For native PostgreSQL:
# Check Windows Services for "postgresql-x64-15"
```

### Prisma Issues
```bash
# If you get permission errors:
# 1. Close VS Code/IDE
# 2. Run as Administrator:
npx prisma generate
npx prisma db push

# 3. Reopen IDE normally
```

### Authentication Issues
1. Clear browser cookies and localStorage
2. Check browser console for errors
3. Verify `.env.local` file exists and is properly formatted

## ✅ Success Indicators

You'll know it's working when:
- [ ] No database connection errors in terminal
- [ ] Registration creates user successfully
- [ ] Login redirects to dashboard
- [ ] Dashboard shows user greeting in Indonesian
- [ ] No "SessionProvider" errors in console

## 🎯 Next Steps After Setup

Once authentication is working:
1. **Test Indonesian Features:**
   - Rupiah currency formatting
   - Bahasa Indonesia interface
   - Jakarta timezone

2. **Explore Dashboard Modules:**
   - Data Management (File uploads)
   - Analytics (Indonesian SME metrics)
   - Business Intelligence
   - Predictive Analytics
   - AI Services

3. **Optional Enhancements:**
   - Google OAuth integration
   - Email service setup
   - Payment processing (Stripe)

---

💡 **Tip:** The Authentication Test Panel on the homepage provides real-time feedback on your authentication setup status.