Feature('Sign in');

const {userLogin} = require('../data/loginData');
const {faker} = require('@faker-js/faker');
const randomEmail = faker.internet.email();
const randomPass = faker.internet.password();

Before(({I}) => {
    I.gotoLogin();
})

Scenario('Successfully sign in with registered account',  ({ I, signinPage }) => {
    signinPage.fillLoginForms(userLogin);
    signinPage.sendForm();
    I.waitForText('Welcome');
    I.see('Welcome')
});

Scenario('Failed sign in with unregistered account',  ({ I, signinPage }) => {
    signinPage.fillLoginForms(userLogin);
    I.fillField(signinPage.fields.email, randomEmail);
    I.fillField(signinPage.fields.password, randomPass);
    signinPage.sendForm();
    I.waitForElement(signinPage.errorMessage);
    I.see('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.', signinPage.errorMessage);
});

Scenario('Failed sign in with empty email',  ({ I, signinPage }) => {
    signinPage.fillLoginForms(userLogin);
    I.fillField(signinPage.fields.email, '');
    signinPage.sendForm();
    I.waitForElement(signinPage.emptyEmail);
    I.see('This is a required field', signinPage.emptyEmail)
});

Scenario('Failed sign in with empty password',  ({ I, signinPage }) => {
    signinPage.fillLoginForms(userLogin);
    I.fillField(signinPage.fields.password, '');
    signinPage.sendForm();
    I.waitForElement(signinPage.emptyPassword);
    I.see('This is a required field', signinPage.emptyPassword)
});