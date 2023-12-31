const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://magento.softwaretestingboard.com/',
      show: true
    }
  },
  plugins: {
    fakerTransform: {
      enabled: true
    },
  },
  include: {
    I: './steps_file.js',
    createAccountPage: "./pages/create_account.js",
    signinPage: "./pages/signin.js",
  },
  name: 'codeceptjs-js-lumamagento'
}