// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    gotoSignup:function(){
      this.amOnPage('/');
      this.click('Create an Account')
      this.see('Create New Customer Account')
    },

    gotoLogin:function(){
      this.amOnPage('/');
      this.click('Sign In')
      this.see('Customer Login')
    }
  });
}
