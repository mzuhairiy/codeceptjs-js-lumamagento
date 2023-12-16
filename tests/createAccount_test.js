Feature('Create an account');

const {validData} = require('../data/createAccountData');

Before(({I}) => {
    I.gotoSignup();
})

Scenario('successfully created an account with valid data',  ({ I, createAccountPage }) => {
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
    I.fillField(createAccountPage.fields.email,'that@aessm.com');
    createAccountPage.sendForm();
    I.waitForElement('.message-success.success.message');
    I.see('Thank you for registering with Main Website Store.', '.message-success.success.message')
});

Scenario('failed created an account due to empty firstname', ({I, createAccountPage}) => {
    createAccountPage.fillFields(validData);
    I.fillField(createAccountPage.fields.firstname,'');
    createAccountPage.sendForm();
    I.waitForElement(createAccountPage.emptyFirstname);
    I.see('This is a required field.', createAccountPage.emptyFirstname);
})
