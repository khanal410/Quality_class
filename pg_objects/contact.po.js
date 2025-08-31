const { expect } = require('@playwright/test');
const { log } = require('console');

exports.contact = class ContactPage {
  constructor(page) {
    this.page = page;
    this.addContactButton = '//button[@id="add-contact"]'; // Adjust the locator as needed
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.contactEmailInput = '#contact-email';
    this.saveButton = '#save-contact';
    this.contactList = '#contact-list';
  }

  async addContact(firstname, lastname, doB, email, phone, address, editContact, deleteContact) {
    await this.page.locator(this.addContactButton).click();
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.contactEmailInput).fill(email);
    await this.page.locator(this.saveButton).click();
  }

  async verifyContactAdded(name) {
    const contactExists = await this.page.locator(`${this.contactList} >> text=${name}`).isVisible();
    expect(contactExists).toBeTruthy();
  }
  async viewContact() {
    await this.page.locator(this.contactList).click();
  }
  async contactEdit(firstName) {
    await this.page.locator(this.editContactButton).click();
    await this.page.waitforTimeout(2000);
    await this.page.locator(this.firstNameInput).click();
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.waitforTimeout(2000);
    await this.page.locator(this.saveButton).click(); 
  }
  async contactDelete() {
    await this.page.waitForTimeout(2000);
    this.page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
    await this.page.locator(this.deleteContact).click();
    // await this.page.waitForTimeout(2000);
    // await this.page.locator(this.confirmDeleteButton).click();
  }
}