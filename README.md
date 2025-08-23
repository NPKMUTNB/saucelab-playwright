# SauceDemo Playwright Test Automation

[![Playwright Tests](https://github.com/USERNAME/REPOSITORY/actions/workflows/playwright.yml/badge.svg)](https://github.com/USERNAME/REPOSITORY/actions/workflows/playwright.yml)
[![SauceDemo E2E Tests](https://github.com/USERNAME/REPOSITORY/actions/workflows/saucedemo-tests.yml/badge.svg)](https://github.com/USERNAME/REPOSITORY/actions/workflows/saucedemo-tests.yml)

A comprehensive test automation suite for SauceDemo e-commerce website using Playwright with both JavaScript and TypeScript implementations.

## 📚 Documentation

- **[📖 User Manual (Markdown)](manual.md)** - Complete user guide and documentation
- **[🌐 User Manual (HTML)](manual.html)** - Interactive HTML version with styling
- **[📋 Quick Reference](#-quick-start)** - Basic commands and usage

## 🎭 Features

- **Cross-browser Testing**: Chrome, Firefox, and Safari support
- **Video Recording**: Automatic test execution videos
- **Interactive Testing**: MCP Playwright integration for real-time debugging
- **Random Data Generation**: Dynamic test data for realistic scenarios
- **CI/CD Integration**: GitHub Actions workflows for automated testing
- **Comprehensive Reporting**: HTML reports with screenshots and traces

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd saucelab-playwright-mcp

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm test

# Run with visible browser
npm run test:headed

# Run interactive UI mode
npm run test:ui

# Run MCP tests (TypeScript)
npm run test:mcp

# Run MCP tests (JavaScript)
npm run test:mcp:js

# View test reports
npm run report
```

## 📁 Test Files

| File | Description | Language |
|------|-------------|----------|
| `tests/example.spec.js` | Basic Playwright examples | JavaScript |
| `tests/saucedemo.spec.js` | Original SauceDemo test | JavaScript |
| `tests/mcp-saucedemo.spec.js` | Enhanced MCP-based tests | JavaScript |
| `tests/mcp-saucedemo.spec.ts` | Enhanced MCP-based tests | TypeScript |

## 🎯 Test Scenarios

### Complete E2E Purchase Flow
1. **Login** with standard user credentials
2. **Product Selection** - Add "Sauce Labs Backpack" to cart
3. **Cart Operations** - Verify cart functionality
4. **Checkout Process** - Complete purchase with random data
5. **Order Verification** - Confirm "Thank you for your order!" message

### Additional Test Cases
- **Cart Functionality**: Multi-item operations and removal
- **User Authentication**: Different user types testing
- **Product Information**: Details and pricing verification
- **Navigation**: Page transitions and back navigation

## 🔧 Configuration

### Playwright Configuration
The `playwright.config.js` includes:
- **Video Recording**: `video: 'on'`
- **Screenshots**: `screenshot: 'only-on-failure'`
- **Traces**: `trace: 'on-first-retry'`
- **Cross-browser Support**: Chromium, Firefox, WebKit

### Random Data Generation
Tests use dynamic data generation:
```javascript
const firstName = `Alex${Math.floor(Math.random() * 1000)}`;
const lastName = `Johnson${Math.floor(Math.random() * 1000)}`;
const zipCode = `${Math.floor(Math.random() * 90000) + 10000}`;
```

## 🤖 CI/CD Workflows

### Main Playwright Tests (`playwright.yml`)
- **Triggers**: Push/PR to main/develop branches
- **Matrix Strategy**: Tests across multiple browsers
- **Artifacts**: Test reports, videos, and screenshots
- **Pages Deployment**: Automatic report hosting

### SauceDemo Specific Tests (`saucedemo-tests.yml`)
- **Focused Testing**: SauceDemo-specific scenarios
- **Scheduled Runs**: Daily automated testing at 2 AM UTC
- **Manual Triggers**: Workflow dispatch with browser selection
- **Performance Monitoring**: Lighthouse integration

### Workflow Features
- ✅ **Cross-browser compatibility testing**
- ✅ **Automatic artifact collection**
- ✅ **Test result summaries**
- ✅ **Performance monitoring**
- ✅ **GitHub Pages report deployment**

## 📊 Test Reports

### HTML Reports
- Interactive test results with screenshots
- Video playback of test execution
- Timeline view of test steps
- Error details with stack traces

### Artifacts
- **Videos**: `.webm` format test recordings
- **Screenshots**: `.png` failure captures
- **Traces**: `.zip` detailed execution traces
- **Reports**: HTML format with full details

## 🎮 Interactive Testing (MCP Playwright)

The project supports real-time interactive testing:

```bash
# Start interactive browser session
npm run test:ui
```

Features:
- **Live Test Execution**: Watch tests run in real-time
- **Step Debugging**: Execute tests step-by-step
- **Element Inspection**: Debug selectors interactively
- **Test Recording**: Record new test scenarios

## 🔍 Debugging

### Local Debugging
```bash
# Debug mode with browser DevTools
npm run test:debug

# Headed mode for visual debugging
npm run test:headed

# UI mode for interactive debugging  
npm run test:ui
```

### CI Debugging
- Check GitHub Actions artifacts for videos and screenshots
- Review test traces for detailed execution steps
- Examine console logs in workflow runs

## 📈 Test Data

### User Credentials
- **Standard User**: `standard_user` / `secret_sauce`
- **Problem User**: `problem_user` / `secret_sauce`
- **Error User**: `error_user` / `secret_sauce`

### Test Products
- **Sauce Labs Backpack**: $29.99
- **Sauce Labs Bike Light**: $9.99
- **Sauce Labs Bolt T-Shirt**: $15.99

## 🛠️ Development

### Adding New Tests
1. Create test file in `tests/` directory
2. Follow naming convention: `*.spec.js` or `*.spec.ts`
3. Use existing patterns for consistency
4. Include proper assertions and logging

### Best Practices
- Use `data-test` attributes for reliable selectors
- Implement random data generation for forms
- Include comprehensive assertions
- Add console logging for test tracking
- Handle async operations properly

## 📝 License

This project is for educational and testing purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

---

**Note**: Replace `USERNAME/REPOSITORY` in the badges with your actual GitHub username and repository name.