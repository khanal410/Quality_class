import { test } from '@playwright/test';
import { LoginPage } from '../pg_objects/login.po.js';
const testData = require('../fixtures/loginFixture.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/'); // Adjust the URL as needed,'/'->identifies baseurl in playwright.config.js
});

// test.describe('Login Tests', () => {
//     test('The email address or mobile number you entered isn’t connected to an account.', async ({ page }) => {
//         const login = new LoginPage(page);
//         await login.login('bkhanal410', ''); // Replace with actual valid credentials
//         await login.verifyValidLogin();
//     });
// })
test.describe('Login Tests', () => {
    test('Login with valid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.validUser.username, testData.validUser.password); // Replace with actual valid credentials
        await login.verifyValidLogin();
    });

    test('Login with invalid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.invalidUser.password); // Replace with actual invalid credentials
        await login.verifyInvalidLogin();
    });
    test('Login with empty credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName,testData.invalidUser.password); // Attempt to login with empty credentials
        await login.verifyInvalidLogin(); // Assuming this method checks for an error message
    });
}
);  

