import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Test - MCP Generated', () => {
  test('Complete purchase flow from login to order confirmation using MCP Playwright', async ({ page }) => {
    // Navigate to SauceDemo website
    await page.goto('https://www.saucedemo.com/');
    
    // Verify we're on the login page
    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    
    // Login with standard user credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Verify successful login - should be on inventory page
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
    
    // Add "Sauce Labs Backpack" to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verify the item was added to cart
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    // Open the shopping cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    // Verify we're in the cart page and backpack is listed
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.cart_quantity')).toHaveText('1');
    
    // Click on Checkout button
    await page.locator('[data-test="checkout"]').click();
    
    // Verify we're on the checkout information page
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    
    // Generate random test data for checkout form
    const firstName = `Alex${Math.floor(Math.random() * 1000)}`;
    const lastName = `Johnson${Math.floor(Math.random() * 1000)}`;
    const zipCode = `${Math.floor(Math.random() * 90000) + 10000}`;
    
    // Fill in the checkout information with random data
    await page.locator('[data-test="firstName"]').fill(firstName);
    await page.locator('[data-test="lastName"]').fill(lastName);
    await page.locator('[data-test="postalCode"]').fill(zipCode);
    
    // Click Continue button
    await page.locator('[data-test="continue"]').click();
    
    // Verify we're on the checkout overview page
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    
    // Verify the product details in overview
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.summary_subtotal_label')).toContainText('$29.99');
    await expect(page.locator('.summary_tax_label')).toContainText('$2.40');
    await expect(page.locator('.summary_total_label')).toContainText('$32.39');
    
    // Verify payment and shipping information
    await expect(page.locator('.summary_value_label').first()).toContainText('SauceCard #31337');
    await expect(page.locator('.summary_value_label').last()).toContainText('Free Pony Express Delivery!');
    
    // Click Finish button to complete the order
    await page.locator('[data-test="finish"]').click();
    
    // Verify we're on the order completion page
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    
    // Verify the success message "Thank you for your order!"
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    
    // Additional verification - check for completion message and pony express image
    await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched');
    await expect(page.locator('.pony_express')).toBeVisible();
    
    // Verify Back Home button is available
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    
    console.log(`✅ MCP Test completed successfully with user data: ${firstName} ${lastName}, ZIP: ${zipCode}`);
    console.log('🎉 Order confirmation: "Thank you for your order!" message verified');
  });
  
  test('Verify cart functionality and product details', async ({ page }) => {
    // Login first
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Add multiple items to test cart functionality
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    
    // Verify cart badge shows 2 items
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    
    // Open cart and verify both items
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(2);
    
    // Remove one item and verify count
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    console.log('✅ Cart functionality test completed successfully');
  });
});