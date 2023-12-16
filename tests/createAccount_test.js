Feature('Create an account');

const {validData} = require('../data/createAccountData');

Before(({I}) => {
    I.gotoSignup();
})

Scenario('should successfully created an account',  ({ I, createAccountPage }) => {
    // I.amOnPage('/')
    // I.see('Sign In')
    // I.click('Create an Account')
    // I.see('Create New Customer Account')
    // I.fillField('firstname', 'Cecep')
    // I.fillField('lastname', 'Volkanovski')
    // I.fillField('#email_address', 'ccepey@volk.com')
    // I.fillField('#password', 'Abcd@123')
    // I.fillField('#password-confirmation', 'Abcd@123')
    // I.click('Create an Account', '.primary')
    // I.waitForElement('.message-success.success.message')
    // I.see('Thank you for registering with Main Website Store.', '.message-success.success.message')
    createAccountPage.fillFields(validData);
    createAccountPage.sendForm();
    I.waitForElement('.message-success.success.message');
    I.see('Thank you for registering with Main Website Store.', '.message-success.success.message')
});
