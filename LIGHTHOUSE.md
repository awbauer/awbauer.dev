# Lighthouse CI Setup

This repository uses [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) to automatically audit web performance, accessibility, SEO, and best practices on every pull request and push to main.

## How It Works

The GitHub Actions workflow (`.github/workflows/lighthouse.yml`) runs Lighthouse audits on every PR and main branch push. It:

1. Serves the static site locally
2. Runs Lighthouse 3 times and takes median scores
3. Checks scores against defined thresholds
4. Comments on PRs with results
5. Uploads detailed reports as artifacts

## Score Thresholds

Builds will **warn** if any of these minimum scores aren't met:

- **Performance**: 85/100
- **Accessibility**: 95/100
- **Best Practices**: 95/100
- **SEO**: 95/100

## Performance Budgets

The following budgets are enforced (warnings, not failures):

| Resource Type | Budget |
|--------------|--------|
| HTML Document | 20 KB |
| CSS | 15 KB |
| JavaScript | 30 KB (minified) |
| Fonts | 80 KB |
| Images | 500 KB |
| **Total** | **800 KB** |

### Core Web Vitals Budgets

| Metric | Budget |
|--------|--------|
| First Contentful Paint (FCP) | 1.8s |
| Largest Contentful Paint (LCP) | 2.5s |
| Cumulative Layout Shift (CLS) | 0.1 |
| Total Blocking Time (TBT) | 200ms |

## Configuration

All settings are defined in `lighthouserc.js`. To adjust thresholds or budgets, edit this file.

### Running Locally

To run Lighthouse CI locally:

```bash
# Install Lighthouse CI globally
npm install -g @lhci/cli

# Run the audit
lhci autorun
```

### Viewing Results

- **In PRs**: Automated comment shows scores for each category
- **In GitHub Actions**: Click "Actions" → Select workflow run → Download "lighthouse-results" artifact
- **Local runs**: Open `.lighthouseci/*.html` files in your browser

## Interpreting Scores

- 🟢 **90-100**: Good - No action needed
- 🟡 **50-89**: Needs improvement - Review recommendations
- 🔴 **0-49**: Poor - Action required

## Common Issues

### Build failing on Performance
- Check image sizes and optimize with WebP
- Review JavaScript bundle size
- Ensure resources are cached properly

### Build failing on Accessibility
- Verify all images have alt text
- Check color contrast ratios
- Ensure keyboard navigation works

### Build failing on Best Practices
- Use HTTPS for all resources
- Ensure no console errors
- Check for security vulnerabilities

### Build failing on SEO
- Add meta descriptions
- Ensure proper heading hierarchy
- Verify robots.txt allows indexing

## Resources

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Web.dev Guides](https://web.dev/learn/)
- [Core Web Vitals](https://web.dev/vitals/)
