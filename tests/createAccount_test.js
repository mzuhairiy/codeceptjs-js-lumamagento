Feature('Create an account');

const {validData} = require('../data/createAccountData');
const {faker} = require('@faker-js/faker');

Before(({I}) => {
    I.gotoSignup();
})

Scenario('successfully created an account with valid data',  ({ I, createAccountPage}) => {
    //const randomName = faker.name.firstname();
    const randomEmail = faker.internet.email();

    createAccountPage.fillFields(validData);
    I.fillField(createAccountPage.fields.email, randomEmail);
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
