const { expect } = require('@playwright/test');
const { log } = require('console');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#email';
    this.passwordInput = '//input[@placeholder="pass"]'; // Adjusted to match the locator in the example
    this.loginButton = '//button[@id="submit"]';
    this.logoutButton = '//button[@id="logout"]';
    this.loginvalid = '//p[contains(text(), "The email address or mobile number you entered isn’t connected to an account.")]';
    this.alertMessage = '//span[@id="error"]';
    
  }

  async login(username, password) { //parameterized function as two parameters are passed
    // await this.page.waitforTimeout(2000);
        // await this.page.locator(this.loginButton).click(EMISPortal);
        

    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin(){
    const LoginValidation = await this.page.locator(this.loginvalid);  
    // await this.page.waitForTimeout(2000);
    expect(this.logoutButton).toBeVisible();
    await expect(LoginValidation).toHaveText('The email address or mobile number you entered isn’t connected to an account.');
  }
//   async goto() {
//     await this.page.goto('https://www.facebook.com/');
//   }

//   async fillEmail(email) {
//     await this.emailInput.fill(email);
//   }

//   async fillPassword(password) {
//     await this.passwordInput.fill(password);
//   }

//   async clickLogin() {
//     await this.loginButton.click();
//   }
}