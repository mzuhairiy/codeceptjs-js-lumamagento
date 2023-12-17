Feature('Create an account');

const {newUser} = require('../data/createAccountData');
const {faker} = require('@faker-js/faker');
const randomEmail = faker.internet.email();

Before(({I}) => {
    I.gotoSignup();
})

/* Positive scenario with valid data */
Scenario('successfully created an account with valid data',  ({ I, createAccountPage}) => {
    createAccountPage.fillFields(newUser);
    I.fillField(createAccountPage.fields.email, randomEmail);
    createAccountPage.sendForm();
    I.waitForElement(createAccountPage.successAlert);
    I.see('Thank you for registering with Main Website Store.', createAccountPage.successAlert)
})

// /* Negative Scenario */
// Scenario('failed to create an account with registered email', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.email,'Dam@inc.com');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.registeredEmailAlert);
//     I.see('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.', createAccountPage.registeredEmailAlert);
// })

// Scenario('failed to create an account due to empty firstname', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.firstname,'');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.emptyFirstname);
//     I.see('This is a required field.', createAccountPage.emptyFirstname);
// })

// Scenario('failed to create an account due to empty lastname', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.lastname,'');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.emptyLastname);
//     I.see('This is a required field.', createAccountPage.emptyLastname);
// })

// Scenario('failed to create an account due to empty email', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.email,'');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.emptyEmail);
//     I.see('This is a required field.', createAccountPage.emptyEmail);
// })

// Scenario('failed to create an account due to empty password', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.password1,'');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.emptyPassword1);
//     //I.see('No Password', createAccountPage.passwordStrength.noPassword);
//     I.see('This is a required field.', createAccountPage.emptyPassword1);
// })

// Scenario('failed to create an account due to empty confirm password', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.password2,'');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.emptyPassword2);
//     //I.see('Strong', createAccountPage.passwordStrength.strong);
//     I.see('This is a required field.', createAccountPage.emptyPassword2);
// })

// /* Password Scenario */
// Scenario('failed to create an account due to insufficient password length', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.password1,'@1Bcdef');
//     I.see('Weak', createAccountPage.passwordStrength.weak);
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.lengthValidation);
//     I.seeElement(createAccountPage.lengthValidation);
// })

// Scenario('failed to create an account due to inappropriate password combination', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.password1,'12345abcd');
//     I.see('Weak', createAccountPage.passwordStrength.weak);
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.charValidation);
//     I.seeElement(createAccountPage.charValidation);
// })

// Scenario('failed to create an account due to mismatch passwords', ({I, createAccountPage}) => {
//     createAccountPage.fillFields(newUser);
//     I.fillField(createAccountPage.fields.password1,'@123Abcde');
//     I.see('Medium', createAccountPage.passwordStrength.medium);
//     I.fillField(createAccountPage.fields.password2,'@123Abcd');
//     createAccountPage.sendForm();
//     I.waitForElement(createAccountPage.passNotmatch);
//     I.seeElement(createAccountPage.passNotmatch);
// })