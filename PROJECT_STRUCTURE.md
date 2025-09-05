# Noontun Analytics - Project Structure

## 📁 Directory Organization

### Core Application Structure
```
noontun-analytics/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── (marketing)/              # Marketing pages (public)
│   │   │   ├── pricing/
│   │   │   ├── features/
│   │   │   └── about/
│   │   ├── dashboard/                # Protected dashboard routes
│   │   │   ├── data-management/      # 📊 Data Management Service
│   │   │   ├── analytics/            # 📈 Data Analysis Service
│   │   │   ├── business-intelligence/ # 💼 BI Dashboard
│   │   │   ├── predictive/           # 🔮 Predictive Analytics
│   │   │   ├── ai-services/          # 🤖 AI Services
│   │   │   └── billing/              # 💳 Subscription Management
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── data/                 # Data management APIs
│   │   │   ├── analytics/            # Analytics computation APIs
│   │   │   ├── ai/                   # AI service APIs
│   │   │   └── billing/              # Billing and subscription APIs
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Landing page
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # Base UI components (shadcn/ui)
│   │   ├── forms/                    # Form components
│   │   ├── charts/                   # Data visualization components
│   │   └── layout/                   # Layout components
│   ├── lib/                          # Utility libraries
│   │   ├── services/                 # External service integrations
│   │   ├── utils/                    # Helper functions
│   │   ├── analytics/                # Analytics engine
│   │   └── ai/                       # AI/ML utilities
│   ├── hooks/                        # Custom React hooks
│   │   ├── data/                     # Data management hooks
│   │   └── auth/                     # Authentication hooks
│   ├── types/                        # TypeScript type definitions
│   │   ├── api/                      # API response types
│   │   └── models/                   # Data model types
│   └── locales/                      # Internationalization
│       ├── id/                       # Indonesian (Bahasa Indonesia)
│       └── en/                       # English
├── prisma/                           # Database schema and migrations
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migration files
├── public/                           # Static assets
│   ├── assets/
│   │   ├── images/                   # Marketing and UI images
│   │   └── icons/                    # Icons and logos
│   └── favicon.ico
├── tests/                            # Test files
│   ├── unit/                         # Unit tests
│   └── integration/                  # Integration tests
└── docs/                             # Documentation
    ├── api/                          # API documentation
    ├── deployment/                   # Deployment guides
    └── user-guides/                  # User documentation
```

## 🏗️ Architecture Overview

### Service Architecture
1. **Data Management Service** - File processing, validation, storage
2. **Analytics Service** - Statistical analysis, reporting
3. **Business Intelligence Service** - KPI dashboards, metrics
4. **Predictive Analytics Service** - Forecasting, trend analysis
5. **AI Services** - Machine learning, automation
6. **Billing Service** - Subscriptions, payments

### Technology Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (primary), MongoDB (documents)
- **Authentication**: NextAuth.js
- **File Storage**: AWS S3 or local storage
- **Analytics**: Custom engine with Chart.js/Recharts
- **AI/ML**: OpenAI API, TensorFlow.js
- **Payments**: Stripe, Midtrans (Indonesian)
- **Localization**: next-intl, react-intl

### Key Features
✅ Multi-tenant SaaS architecture
✅ Indonesian language localization
✅ Mobile-responsive design
✅ Real-time data processing
✅ Advanced analytics and BI
✅ AI-powered insights
✅ Subscription billing
✅ Comprehensive testing
✅ Production-ready deployment

## 🎯 Service Modules

### 1. Data Management Module
- **Location**: `src/app/dashboard/data-management/`
- **Features**: File upload, data validation, import/export
- **APIs**: `/api/data/*`
- **Components**: Upload forms, data tables, validation tools

### 2. Analytics Module
- **Location**: `src/app/dashboard/analytics/`
- **Features**: Statistical analysis, custom reports
- **APIs**: `/api/analytics/*`
- **Components**: Chart components, report builders

### 3. Business Intelligence Module
- **Location**: `src/app/dashboard/business-intelligence/`
- **Features**: KPI dashboards, executive reports
- **APIs**: `/api/analytics/bi/*`
- **Components**: Dashboard widgets, metric cards

### 4. Predictive Analytics Module
- **Location**: `src/app/dashboard/predictive/`
- **Features**: Forecasting, trend analysis
- **APIs**: `/api/analytics/predictive/*`
- **Components**: Forecast charts, scenario planners

### 5. AI Services Module
- **Location**: `src/app/dashboard/ai-services/`
- **Features**: ML insights, automation
- **APIs**: `/api/ai/*`
- **Components**: AI widgets, automation tools

### 6. Billing Module
- **Location**: `src/app/dashboard/billing/`
- **Features**: Subscription management, payments
- **APIs**: `/api/billing/*`
- **Components**: Payment forms, subscription cards

## 🌐 Localization Strategy

### Indonesian Market Focus
- **Primary Language**: Bahasa Indonesia (id)
- **Secondary Language**: English (en)
- **Currency**: Indonesian Rupiah (IDR)
- **Date/Time**: Indonesian timezone (WIB/WITA/WIT)
- **Business Practices**: Local compliance and practices

### File Structure
```
src/locales/
├── id/                               # Indonesian
│   ├── common.json                   # Common UI text
│   ├── dashboard.json                # Dashboard specific
│   ├── services.json                 # Service descriptions
│   └── marketing.json                # Marketing content
└── en/                               # English
    ├── common.json
    ├── dashboard.json
    ├── services.json
    └── marketing.json
```

## 📊 Database Schema Design

### Core Entities
- **Users**: Authentication and profile data
- **Organizations**: Multi-tenant organization management
- **Subscriptions**: Billing and plan management
- **Data Sources**: Connected data sources
- **Analytics**: Saved reports and dashboards
- **AI Models**: Custom AI model configurations

### Service-Specific Tables
- **Data Management**: Files, imports, validations
- **Analytics**: Reports, charts, metrics
- **BI**: Dashboards, KPIs, alerts
- **Predictive**: Models, forecasts, scenarios
- **AI**: Training data, model results

## 🚀 Development Workflow

### Environment Setup
1. **Development**: Local development with hot reload
2. **Staging**: Testing environment with production data
3. **Production**: Live environment for customers

### CI/CD Pipeline
1. **Code Quality**: ESLint, Prettier, TypeScript checks
2. **Testing**: Unit tests, integration tests, E2E tests
3. **Building**: Next.js production build
4. **Deployment**: Automated deployment to cloud

### Security Considerations
- **Authentication**: Multi-factor authentication
- **Authorization**: Role-based access control
- **Data Protection**: Encryption at rest and in transit
- **Compliance**: Indonesian data protection laws
- **API Security**: Rate limiting, input validation

This architecture provides a solid foundation for building a comprehensive data services platform specifically designed for Indonesian small businesses.