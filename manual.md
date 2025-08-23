# SauceDemo Playwright Test Automation - User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation Guide](#installation-guide)
4. [Quick Start](#quick-start)
5. [Test Execution](#test-execution)
6. [Interactive Testing](#interactive-testing)
7. [Understanding Test Results](#understanding-test-results)
8. [CI/CD Integration](#cicd-integration)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Configuration](#advanced-configuration)
11. [Best Practices](#best-practices)
12. [FAQ](#faq)

## Introduction

This manual provides comprehensive guidance for using the SauceDemo Playwright Test Automation suite. The project automates end-to-end testing of the SauceDemo e-commerce website using Playwright framework with both JavaScript and TypeScript implementations.

### What This Project Tests
- **User Authentication**: Login functionality with different user types
- **Product Management**: Adding/removing items from cart
- **E-commerce Flow**: Complete purchase process from login to confirmation
- **Cross-browser Compatibility**: Testing across Chrome, Firefox, and Safari
- **Random Data Validation**: Dynamic form filling with generated test data

### Key Features
- 🎭 **Multi-browser Support**: Chrome, Firefox, Safari
- 📹 **Video Recording**: Automatic test execution recording
- 🎮 **Interactive Mode**: Real-time test debugging with MCP Playwright
- 🤖 **CI/CD Integration**: Automated GitHub Actions workflows
- 📊 **Comprehensive Reporting**: HTML reports with screenshots and traces

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10, macOS 10.15, Ubuntu 18.04 or later
- **Node.js**: Version 18.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space for browsers and dependencies

### Supported Browsers
- **Chromium**: Latest version (auto-installed)
- **Firefox**: Latest version (auto-installed)
- **WebKit**: Latest version (auto-installed)

## Installation Guide

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd saucelab-playwright-mcp
```

### Step 2: Install Dependencies
```bash
# Install Node.js dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Step 3: Verify Installation
```bash
# Run a quick test to verify setup
npm run test:mcp:js
```

## Quick Start

### Running Your First Test
```bash
# Run all tests with visible browser
npm run test:headed

# Run MCP SauceDemo tests specifically
npm run test:mcp

# Open interactive UI mode
npm run test:ui
```

### Basic Test Commands
| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Interactive test runner |
| `npm run test:mcp` | MCP TypeScript tests |
| `npm run test:mcp:js` | MCP JavaScript tests |
| `npm run report` | View test reports |

## Test Execution

### Available Test Files
1. **`tests/example.spec.js`** - Basic Playwright examples
2. **`tests/saucedemo.spec.js`** - Original SauceDemo test
3. **`tests/mcp-saucedemo.spec.js`** - Enhanced JavaScript tests
4. **`tests/mcp-saucedemo.spec.ts`** - Enhanced TypeScript tests

### Test Scenarios Covered

#### Complete E2E Purchase Flow
1. **Login Process**
   - Navigate to https://www.saucedemo.com/
   - Enter credentials: `standard_user` / `secret_sauce`
   - Verify successful authentication

2. **Product Selection**
   - Browse products catalog
   - Add "Sauce Labs Backpack" ($29.99) to cart
   - Verify cart badge updates to show 1 item

3. **Cart Operations**
   - Open shopping cart
   - Verify product details and quantity
   - Proceed to checkout

4. **Checkout Process**
   - Fill checkout form with random data:
     - First Name: `Alex{random number}`
     - Last Name: `Johnson{random number}`
     - ZIP Code: `{random 5-digit number}`
   - Continue to payment overview

5. **Order Completion**
   - Review order summary (Total: $32.39 including tax)
   - Complete purchase
   - Verify success message: **"Thank you for your order!"**

#### Additional Test Cases
- **Multi-item Cart Testing**: Add/remove multiple products
- **User Type Validation**: Test different user credentials
- **Product Information Verification**: Check prices and descriptions
- **Navigation Testing**: Page transitions and back navigation

### Running Specific Tests
```bash
# Run specific test file
npx playwright test tests/mcp-saucedemo.spec.js

# Run specific test by name
npx playwright test --grep "Complete purchase flow"

# Run tests on specific browser
npx playwright test --project=chromium

# Run in debug mode
npx playwright test --debug
```

## Interactive Testing

### MCP Playwright Integration
The project supports real-time interactive testing for debugging and development.

#### Starting Interactive Mode
```bash
npm run test:ui
```

#### Interactive Features
- **Live Execution**: Watch tests run in real-time
- **Step-by-Step Debugging**: Execute one step at a time
- **Element Inspection**: Debug selectors interactively
- **Test Recording**: Record new test scenarios
- **Timeline View**: See execution timeline

#### Using Interactive Mode
1. **Launch UI Mode**: Run `npm run test:ui`
2. **Select Test**: Choose test file from the interface
3. **Run/Debug**: Use play/pause controls
4. **Inspect Elements**: Click elements to see selectors
5. **View Results**: Check screenshots and videos

### Browser Developer Tools
```bash
# Open browser with DevTools
npm run test:debug

# Headed mode for manual inspection
npm run test:headed
```

## Understanding Test Results

### HTML Reports
After test execution, view detailed reports:
```bash
npm run report
```

#### Report Contents
- **Test Overview**: Pass/fail status and execution time
- **Screenshots**: Captured at key steps and failures
- **Videos**: Complete test execution recording
- **Traces**: Detailed step-by-step execution data
- **Console Logs**: Browser console output
- **Network Activity**: HTTP requests and responses

### Artifacts Location
- **Videos**: `test-results/**/*.webm`
- **Screenshots**: `test-results/**/*.png`
- **Traces**: `test-results/**/*.zip`
- **Reports**: `playwright-report/`

### Understanding Test Output
```
Running 4 tests using 4 workers
✅ MCP JavaScript Test completed successfully with user data: Alex207 Johnson795, ZIP: 11127
🎉 Order confirmation: "Thank you for your order!" message verified
4 passed (2.1s)
```

#### Output Explanation
- **Test Count**: Number of tests executed
- **Workers**: Parallel execution threads
- **Random Data**: Generated test data for each run
- **Verification**: Key checkpoints confirmed
- **Timing**: Total execution duration

## CI/CD Integration

### GitHub Actions Workflows
The project includes automated testing workflows:

#### Main Workflows
1. **`playwright.yml`** - General Playwright testing
2. **`saucedemo-tests.yml`** - SauceDemo-specific testing

#### Workflow Triggers
- **Push**: To main/develop branches
- **Pull Request**: To main/develop branches
- **Schedule**: Daily at 2 AM UTC
- **Manual**: Workflow dispatch

#### Viewing Results
1. Go to GitHub repository
2. Navigate to "Actions" tab
3. Select workflow run
4. Download artifacts (videos, reports)

### Setting Up CI/CD
1. **Push to GitHub**: Workflows run automatically
2. **Configure Secrets**: Add any required tokens
3. **Enable Pages**: For report deployment
4. **Review Results**: Check workflow status

## Troubleshooting

### Common Issues

#### Installation Problems
**Issue**: Browser installation fails
```bash
# Solution: Manual browser installation
npx playwright install chromium firefox webkit --with-deps
```

**Issue**: Permission errors on macOS/Linux
```bash
# Solution: Fix permissions
sudo chown -R $(whoami) ~/.cache/ms-playwright
```

#### Test Execution Issues
**Issue**: Tests timeout
- **Cause**: Slow network or system
- **Solution**: Increase timeout in `playwright.config.js`
```javascript
timeout: 60000 // 60 seconds
```

**Issue**: Element not found
- **Cause**: Page not fully loaded or selector changed
- **Solution**: Add wait conditions
```javascript
await page.waitForSelector('[data-test="login-button"]');
```

#### Video/Screenshot Issues
**Issue**: No videos generated
- **Check**: Video configuration in `playwright.config.js`
```javascript
use: {
  video: 'on', // Should be enabled
}
```

### Debug Steps
1. **Check Console Output**: Look for error messages
2. **Run in Headed Mode**: `npm run test:headed`
3. **Use Debug Mode**: `npm run test:debug`
4. **Check Network**: Ensure internet connectivity
5. **Update Dependencies**: `npm update`

### Getting Help
- **GitHub Issues**: Report bugs with template
- **Logs**: Include console output
- **Environment**: Specify OS, Node.js, browser versions
- **Reproducible Steps**: Provide clear reproduction steps

## Advanced Configuration

### Customizing Playwright Config
Edit `playwright.config.js` for advanced settings:

```javascript
module.exports = defineConfig({
  // Test directory
  testDir: './tests',
  
  // Global timeout
  timeout: 30000,
  
  // Retry configuration
  retries: process.env.CI ? 2 : 0,
  
  // Video settings
  use: {
    video: 'on',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  
  // Browser projects
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

### Environment Variables
```bash
# Set base URL
export PLAYWRIGHT_BASE_URL=https://www.saucedemo.com

# Set browser
export PLAYWRIGHT_BROWSER=chromium

# Enable debug mode
export DEBUG=pw:*
```

### Custom Test Data
Create `test-data.json` for custom configurations:
```json
{
  "users": {
    "standard": {
      "username": "standard_user",
      "password": "secret_sauce"
    }
  },
  "products": {
    "backpack": {
      "name": "Sauce Labs Backpack",
      "price": "$29.99"
    }
  }
}
```

## Best Practices

### Test Development
1. **Use Data-Test Attributes**: Prefer `[data-test="..."]` selectors
2. **Implement Waits**: Use proper wait conditions
3. **Random Data**: Generate dynamic test data
4. **Assertions**: Include comprehensive verifications
5. **Error Handling**: Add try-catch blocks for reliability

### Code Organization
```javascript
// Good: Descriptive test names
test('Complete purchase flow with random checkout data', async ({ page }) => {
  // Test implementation
});

// Good: Page object model
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = '[data-test="firstName"]';
  }
}
```

### Maintenance
1. **Regular Updates**: Keep dependencies current
2. **Review Failures**: Analyze failed test patterns
3. **Performance**: Monitor test execution time
4. **Documentation**: Keep manual updated

## FAQ

### General Questions

**Q: How long do tests typically take to run?**
A: Complete test suite runs in 2-4 minutes locally, 5-10 minutes in CI/CD.

**Q: Can I run tests on mobile browsers?**
A: Yes, add mobile device configurations to `playwright.config.js`.

**Q: How do I run tests in parallel?**
A: Playwright runs tests in parallel by default. Configure workers in config file.

### Technical Questions

**Q: Why use random data in tests?**
A: Random data prevents test data conflicts and simulates real user behavior.

**Q: How do I debug a failing test?**
A: Use `npm run test:debug` or review video/screenshot artifacts.

**Q: Can I integrate with other CI/CD systems?**
A: Yes, adapt the GitHub Actions workflows for Jenkins, GitLab CI, or other systems.

### Troubleshooting Questions

**Q: Tests pass locally but fail in CI/CD**
A: Check browser versions, timeouts, and environment differences.

**Q: How do I handle flaky tests?**
A: Add retries, improve wait conditions, and use stable selectors.

**Q: What if SauceDemo website changes?**
A: Update selectors and test logic in test files as needed.

---

For additional support, please refer to the [GitHub repository](.) or create an issue using the provided templates.