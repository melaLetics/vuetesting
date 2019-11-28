module.exports = {
  'demo test'(browser) {
    browser
      .url('localhost:3000')
      .waitForElementVisible('body', 2000)
      .assert.title('testing')
  }
}
