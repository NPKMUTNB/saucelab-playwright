const { test, expect } = require('@playwright/test');

test.describe('SauceDemo E2E Test', () => {
  test('Complete purchase flow from login to order confirmation', async ({ page }) => {
    // Navigate to SauceDemo website
    await page.goto('https://www.saucedemo.com/');
    
    // Verify we're on the login page
    await expect(page).toHaveTitle(/Swag Labs/);
    
    // Login with standard user credentials
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    
    // Verify successful login by checking we're on the products page
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
    
    // Add "Sauce Labs Backpack" to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    
    // Verify the button changed to "Remove" (indicating item was added)
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    
    // Verify cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    // Open the cart
    await page.click('.shopping_cart_link');
    
    // Verify we're in the cart and the backpack is there
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    
    // Click on Checkout button
    await page.click('[data-test="checkout"]');
    
    // Verify we're on the checkout page
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    
    // Generate random data for the form
    const firstName = `John${Math.floor(Math.random() * 1000)}`;
    const lastName = `Doe${Math.floor(Math.random() * 1000)}`;
    const zipCode = `${Math.floor(Math.random() * 90000) + 10000}`;
    
    // Fill in the checkout information
    await page.fill('[data-test="firstName"]', firstName);
    await page.fill('[data-test="lastName"]', lastName);
    await page.fill('[data-test="postalCode"]', zipCode);
    
    // Click Continue button
    await page.click('[data-test="continue"]');
    
    // Verify we're on the checkout overview page
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    
    // Verify the product is listed in the overview
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    
    // Click Finish button
    await page.click('[data-test="finish"]');
    
    // Verify we're on the completion page
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    
    // Verify the success message "Thank you for your order!"
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    
    // Additional verification - check for the pony express image (indicates successful completion)
    await expect(page.locator('.pony_express')).toBeVisible();
    
    console.log(`Test completed successfully with user data: ${firstName} ${lastName}, ZIP: ${zipCode}`);
  });
});