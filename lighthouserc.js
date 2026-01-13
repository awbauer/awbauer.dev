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
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
        'categories:seo': ['warn', { minScore: 0.95 }],

        // Performance budgets (optimized values)
        'resource-summary:document:size': ['warn', { maxNumericValue: 20000 }],  // 20KB
        'resource-summary:font:size': ['warn', { maxNumericValue: 80000 }],      // 80KB
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }],    // 500KB
        'resource-summary:script:size': ['warn', { maxNumericValue: 30000 }],    // 30KB (minified)
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 15000 }], // 15KB
        'resource-summary:total:size': ['warn', { maxNumericValue: 800000 }],    // 800KB

        // Performance metrics (realistic targets)
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],     // 1.8s
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],   // 2.5s
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],         // 200ms

        // Best practices (now achievable)
        'uses-http2': 'off',
        'uses-long-cache-ttl': 'warn',
        'uses-optimized-images': 'off',
        'modern-image-formats': 'off',
        'uses-text-compression': 'warn',
        'unused-css-rules': 'off',
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
