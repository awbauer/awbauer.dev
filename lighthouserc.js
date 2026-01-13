module.exports = {
  ci: {
    collect: {
      // Serve the static site
      staticDistDir: './',
      // Test the index page
      url: ['http://localhost/index.html'],
      // Run 3 times to get median scores
      numberOfRuns: 3,
    },
    assert: {
      // Set minimum scores for each category
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Performance budgets
        'resource-summary:document:size': ['error', { maxNumericValue: 30000 }], // 30KB
        'resource-summary:font:size': ['warn', { maxNumericValue: 100000 }],     // 100KB
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }],    // 500KB
        'resource-summary:script:size': ['warn', { maxNumericValue: 50000 }],    // 50KB
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 20000 }], // 20KB
        'resource-summary:total:size': ['warn', { maxNumericValue: 1000000 }],   // 1MB

        // Performance metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],     // 2s
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],   // 2.5s
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],         // 300ms

        // Ensure best practices
        'uses-http2': 'off', // Can't control this in development
        'uses-long-cache-ttl': 'warn',
        'uses-optimized-images': 'warn',
        'modern-image-formats': 'warn',
        'uses-text-compression': 'warn',
        'unused-css-rules': 'warn',
        'unused-javascript': 'warn',
      },
    },
    upload: {
      // Store reports in the repo
      target: 'filesystem',
      outputDir: '.lighthouseci',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
