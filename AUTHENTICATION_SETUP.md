# Noontun Analytics - Complete Authentication Setup Guide
# Last Updated: 2025-09-02

## 🗄️ 1. PostgreSQL Database Setup

### Option A: Docker Setup (Recommended for Development)
```bash
# Pull and run PostgreSQL container
docker run --name postgres-noontun \
  -e POSTGRES_DB=noontun_analytics \
  -e POSTGRES_USER=noontun_user \
  -e POSTGRES_PASSWORD=noontun_pass_2024 \
  -p 5432:5432 \
  -d postgres:15

# Verify container is running
docker ps

# Connect to database (optional verification)
docker exec -it postgres-noontun psql -U noontun_user -d noontun_analytics
```

### Option B: Native PostgreSQL Installation
```bash
# 1. Download from: https://www.postgresql.org/download/windows/
# 2. Install with default settings
# 3. Remember the password you set for 'postgres' user
# 4. Add PostgreSQL bin to PATH: C:\Program Files\PostgreSQL\15\bin

# Create database and user
psql -U postgres
CREATE DATABASE noontun_analytics;
CREATE USER noontun_user WITH ENCRYPTED PASSWORD 'noontun_pass_2024';
GRANT ALL PRIVILEGES ON DATABASE noontun_analytics TO noontun_user;
\q
```

## 🔧 2. Prisma Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (creates tables)
npx prisma db push

# Optional: Open Prisma Studio to view database
npx prisma studio
```

## 🔐 3. Environment Variables Verification

The `.env.local` file has been created with:
- ✅ Secure NEXTAUTH_SECRET (64-character random string)
- ✅ PostgreSQL connection string
- ✅ Indonesian localization settings
- ✅ Placeholder for optional services (Google OAuth, Stripe, etc.)

## 🧪 4. Test Authentication Flow

### A. Test Database Connection
```bash
# Test if database is accessible
npx prisma db push
```

### B. Test User Registration
1. Start development server: `npm run dev`
2. Go to: http://localhost:3000/register
3. Create test account:
   - Email: test@example.com
   - Password: TestPass123!
   - Name: Test User

### C. Test Login Flow
1. Go to: http://localhost:3000/login
2. Login with test credentials
3. Should redirect to: http://localhost:3000/dashboard

### D. Test Dashboard Access
1. Verify dashboard loads without SessionProvider errors
2. Check user greeting displays correctly
3. Test navigation between dashboard modules

## 🚀 5. Optional Enhancements

### Google OAuth Setup (Optional)
1. Go to: https://console.developers.google.com/
2. Create new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add to .env.local:
   ```
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

### Email Service Setup (Optional)
1. Sign up at: https://resend.com/
2. Get API key
3. Add to .env.local:
   ```
   RESEND_API_KEY="your-resend-api-key"
   ```

## 🔍 6. Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running: `docker ps` or check Windows services
- Check DATABASE_URL format in .env.local
- Ensure port 5432 is not blocked by firewall

### Authentication Issues
- Clear browser cookies and localStorage
- Check NEXTAUTH_SECRET is set correctly
- Verify NEXTAUTH_URL matches your development URL

### Dashboard Access Issues
- Ensure SessionProvider is properly configured (already done)
- Check browser console for JavaScript errors
- Verify user session exists in database

## 📊 7. Database Monitoring

```bash
# View users table
npx prisma studio

# Or use SQL directly
docker exec -it postgres-noontun psql -U noontun_user -d noontun_analytics -c "SELECT * FROM users;"
```

## ✅ 8. Verification Checklist

- [ ] PostgreSQL database running
- [ ] Environment variables configured
- [ ] Prisma client generated and pushed
- [ ] User registration working
- [ ] Login/logout flow working
- [ ] Dashboard accessible after login
- [ ] Session persistence working
- [ ] Indonesian localization active