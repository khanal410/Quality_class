import { test } from '@playwright/test';
import { LoginPage } from '../pg_objects/login.po.js';
const { authenticateUser, createEntity } = require('../tests/helper.spec.js');
import { contact } from '../pg_objects/contact.po.js';
import { access } from 'fs';
import { create } from 'domain';
// const testData = require('../fixtures/loginFixture.json');
// const

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/'); // Adjust the URL as needed,'/'->identifies baseurl in playwright.config.js
  await login.login(testData.validUser.username, ''); // Replace with actual valid credentials
  
});
test.describe('Contact Tests', () => {
//   test('contact add test', async ({ page, request }) => {
//     const contact = new ContactPage(page);  
//     await contact.addContact(testData.validContact.firstName, testData.validContact.lastName, testData.validContact.doB, testData.validContact.email, testData.validContact.phone, testData.validContact.address);
//     await contact.verifyContactAdded(testData.validContact.firstName + ' ' + testData.valid
// Contact.lastName);
//   });
 
  test('Contact Add test', async ({ page }) => {
     const contact=new ContactPage(page);
      await contact.contactAdd(testData.validContact.name, testData.validContact.email, testData.validContact.message);  
      // await contact.submitContactForm();
      await contact.viewContact(); // Assuming this method checks for a success message
      await contact.validateContactCreated(contactTestData.contactAdd.firstName, contactTestData.contactAdd.lastName, contactTestData.contactAdd.email, contactTestData.contactAdd.phone, contactTestData.contactAdd.street1, contactTestData.contactAdd.city, contactTestData.contactAdd.stateProvince, contactTestData.contactAdd.postalCode, contactTestData.contactAdd.country);      accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
      const id =await getEntity(accessToken, 'contact', '200', {request});
      await deleteEntity(accessToken, 'contact/${id}',{request});
      await validateEntity(accessToken, 'contact/${id}', '400' ,{request});
  })
  test('Contact edit test',async({page,request})=>{
    const Data={
      "fistName": "John",
      "lastName": "Doe",
      "birthDate": "1990-01-01",
      "email": "abc@gmail.com",
      "phone": "1234567890",  
      "street1": "123 Main St",
      "city": "Anytown",
      "stateProvince": "CA",
      "postalCode": "12345",
      "country": "USA",
    }
    const contact = new ContactPage(page);
    accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
    await createEntity(accessToken, '/contact',  {request})
    page.reload();
    await contact.viewContact();
    await contact.contactEdit(Data);
    await contact.validateContactCreated(contactTestData.contactEdit.firstName, contactTestData.contactEdit.lastName, contactTestData.contactEdit.email, contactTestData.contactEdit.phone, contactTestData.contactEdit.street1, contactTestData.contactEdit.city, contactTestData.contactEdit.stateProvince, contactTestData.contactEdit.postalCode, contactTestData.contactEdit.country);
  })
    test('Contact delete test',async({page,request})=>{
    const Data={
      "fistName": "John",
      "lastName": "Doe",
      "birthDate": "1990-01-01",
      "email": "abc@gmail.com",
      "phone": "1234567890",  
      "street1": "123 Main St",
      "city": "Anytownn",
      "stateProvince": "CA",
      "postalCode": "02345",
      "country": "USA",
    }
    const contact = new ContactPage(page);
    accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
    await createEntity(Data ,accessToken, '/contact',  {request})
    page.reload();
    await contact.viewContact();
    const id =await getEntity(accessToken, 'contact', '200', {request});
    // await deleteEntity(accessToken, 'contact/${id}',{request});
    // await validateEntity(accessToken, 'contact/${id}', '400' ,{request}); 
    await contact.contactDelete();
    await validateEntity(accessToken, 'contact/${id}', '404' ,{request});
    // await contact.validateContactCreated(contactTestData.contactEdit.firstName, contactTestData.contactEdit.lastName, contactTestData.contactEdit.email, contactTestData.contactEdit.phone, contactTestData.contactEdit.street1, contactTestData.contactEdit.city, contactTestData.contactEdit.stateProvince, contactTestData.contactEdit.postalCode, contactTestData.contactEdit.country);
  })
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  });
  // test('contact delete test',async({page,request})=>{ 
  //   const contact = new ContactPage(page);
  //   accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
  //   await createEntity(accessToken, '/contact',  {request})
  //   page.reload();
  //   await contact.viewContact();
  //   await contact.contactDelete();
  //   await contact.validateContactDeleted(contactTestData.contactDelete.firstName, contactTestData.contactDelete.lastName, contactTestData.contactDelete.email, contactTestData.contactDelete.phone, contactTestData.contactDelete.street1, contactTestData.contactDelete.city, contactTestData.contactDelete.stateProvince, contactTestData.contactDelete.postalCode, contactTestData.contactDelete.country);
  // }
  // );
  // test('Contact view test',async({page,request})=>{
  //   const contact = new ContactPage(page);
  //   accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
  //   await createEntity(accessToken, '/contact',  {request})
  //   page.reload();
  //   await contact.viewContact();
  //   await contact.validateContactCreated(contactTestData.contactView.firstName, contactTestData.contactView.lastName, contactTestData.contactView.email, contactTestData.contactView.phone, contactTestData.contactView.street1, contactTestData.contactView.city, contactTestData.contactView.stateProvince, contactTestData.contactView.postalCode, contactTestData.contactView.country);
  // }   
  // );
// });

//   test('Contact delete test',async({page,request})=>{
//     const contact = new ContactPage(page);
//     accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
//     await createEntity(accessToken, '/contact',  {request})
//     page.reload();
//     await contact.viewContact();
//     await contact.contactDelete();
//     await contact.validateContactDeleted(contactTestData.contactDelete.firstName, contactTestData.contactDelete.lastName, contactTestData.contactDelete.email, contactTestData.contactDelete.phone, contactTestData.contactDelete.street1, contactTestData.contactDelete.city, contactTestData.contactDelete.stateProvince, contactTestData.contactDelete.postalCode, contactTestData.contactDelete.country);
//   }
//   );
//   test('Contact view test',async({page,request})=>{ 
//     const contact = new ContactPage(page);
//     accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password);
//     await createEntity(accessToken, '/contact',  {request})
//     page.reload();
//     await contact.viewContact();
//     await contact.validateContactCreated(contactTestData.contactView.firstName, contactTestData.contactView.lastName, contactTestData.contactView.email, contactTestData.contactView.phone, contactTestData.contactView.street1, contactTestData.contactView.city, contactTestData.contactView.stateProvince, contactTestData.contactView.postalCode, contactTestData.contactView.country);
//   }   
// }); 