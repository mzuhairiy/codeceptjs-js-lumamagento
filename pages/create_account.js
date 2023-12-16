const { I } = inject();

module.exports = {
  //locators
  fields: {
    firstname: '#firstname',
    lastname: '#lastname',
    email: '#email_address',
    password1: '#password',
    password2: '#password-confirmation'
  },
  submitBtn: 'button.action.submit.primary',

  //negative locators
  emptyFirstname: '#firstname-error',
  emptyLastname: '#lastname-error',
  emptyEmail: '#email_address-error',
  emptyPassword1: '#password-error',
  emptyPassword2: '#password-confirmation-error',
  lengthValidation: '//*[@id="password-error" and contains(text(), "Minimum length of this field must be equal or greater than 8 symbols.")]',
  charValidation: '//*[@id="password-error" and contains(text(), "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.")]',
  passNotmatch: '//*[@id="password-confirmation-error" and contains(text(), "Please enter the same value again.")]',

  //password strength
  passwordStrength:{
  strong: '//*[@id="password-strength-meter-label" and contains(text(), "Strong")]',
  medium: '//*[@id="password-strength-meter-label" and contains(text(), "Medium")]',
  weak: '//*[@id="password-strength-meter-label" and contains(text(), "Weak")]',
  veryStrong: '//*[@id="password-strength-meter-label" and contains(text(), "Very Strong")]',
  noPassword: '//*[@id="password-strength-meter-label" and contains(text(), "No Password")]',
},
  //alert after submit
  successAlert: '.message-success.success.message',
  registeredEmailAlert: '.message-error.error.message', //There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.
  //methods
  fillFields({
    firstname,
    lastname,
    email,
    password1,
    password2,
  }){
      I.fillField(this.fields.firstname,firstname);
      I.fillField(this.fields.lastname,lastname);
      I.fillField(this.fields.email,email);
      I.fillField(this.fields.password1,password1);
      I.fillField(this.fields.password2,password2);
    },
    sendForm(){
      I.click(this.submitBtn);
    }
  }
