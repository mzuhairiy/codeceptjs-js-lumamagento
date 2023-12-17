const { I } = inject();

module.exports = {

  //forms
  fields: {
    email: '#email',
    password: '#pass'
  },
  signInBtn: 'button.action.login',

  //negative locator
  emptyEmail: '#email-error',
  emptyPassword: '#pass-error',

  //alert after submit
  errorMessage: 'div.message-error.error.message',

  fillLoginForms({
    email,
    password
  }){
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password,password)
  },
  sendForm(){
    I.click(this.signInBtn)
  }
}
