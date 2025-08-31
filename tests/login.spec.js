import {test, expect} from '@playwright/test';


test ('valid_login', async ({ page }) => {
     await page.goto('https://www.facebook.com/');
     // await page.getByPlaceholder("Email or phone number"). fill('sdsef');
     await page.locator("//input[@name='email']").fill("asdfghjk")
     await page.getByPlaceholder("password"). fill('NODE');
     await page.locator("login  locator").click();
     await page.waitForTimeout(10000000) 
expect
})

test ('invalid_login', async ({ page }) => {
     await page.goto('https://www.facebook.com/');
     // await page.getByPlaceholder("Email or phone number"). fill('sdsef');
     await page.locator("//input[@name='email']").fill("invalid")
     await page.getByPlaceholder("password"). fill('sdfg');
     await page.waitForTimeout(10000000) 
     await page.locator("//input[@name='email']")
})