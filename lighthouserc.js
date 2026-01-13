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
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],

        // Performance budgets (all warnings for initial baseline)
        'resource-summary:document:size': 'off',
        'resource-summary:font:size': 'off',
        'resource-summary:image:size': 'off',
        'resource-summary:script:size': 'off',
        'resource-summary:stylesheet:size': 'off',
        'resource-summary:total:size': 'off',

        // Performance metrics (warnings only)
        'first-contentful-paint': 'off',
        'largest-contentful-paint': 'off',
        'cumulative-layout-shift': 'off',
        'total-blocking-time': 'off',

        // Ensure best practices
        'uses-http2': 'off',
        'uses-long-cache-ttl': 'off',
        'uses-optimized-images': 'off',
        'modern-image-formats': 'off',
        'uses-text-compression': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
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
