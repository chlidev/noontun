/** @type {import('next').NextConfig} */

const crypto = require('crypto');
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  // Server external packages (moved from experimental)
  serverExternalPackages: ['@prisma/client'],
  
  // Experimental features for Next.js 15.5.2
  experimental: {
    // Optimize for better performance
    optimizePackageImports: ['lucide-react', 'recharts', 'chart.js'],
    // Enable partial prerendering for better performance
    ppr: false,
  },
  
  // Turbopack configuration for Next.js 15.5.2
  turbopack: {
    rules: {
      // Custom rules for file processing
      '*.csv': ['file-loader'],
      '*.xlsx': ['file-loader'], 
      '*.xls': ['file-loader'],
    },
    memoryLimit: 4096,
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.noontun.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Webpack configuration (optimized for Turbopack compatibility)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Skip webpack config when using Turbopack
    if (nextRuntime === 'edge') {
      return config;
    }
    
    // Handle PDF.js worker
    config.resolve.alias.canvas = false;
    
    // Optimize for analytics libraries
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    // Add support for CSV and Excel files (Turbopack compatible)
    config.module.rules.push({
      test: /\.(csv|xlsx|xls)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/files/[hash][ext][query]',
      },
    });

    // Optimize bundle splitting for better performance
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[\\/]/.test(module.identifier());
            },
            name(module) {
              const hash = crypto.createHash('sha1');
              hash.update(module.identifier());
              return hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Development server configuration for better browser preview
  devIndicators: {
    appIsrStatus: false,
  },
  
  // Security headers (updated for development compatibility)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: process.env.NODE_ENV === 'development' ? 'SAMEORIGIN' : 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.ALLOWED_ORIGINS || '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/overview',
        permanent: false,
      },
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false,
      },
    ];
  },

  // Environment-specific settings
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Build optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Output configuration (only for production builds)
  ...(process.env.NODE_ENV === 'production' && {
    output: 'standalone',
  }),
  
  // Logging
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
};

module.exports = withNextIntl(nextConfig);