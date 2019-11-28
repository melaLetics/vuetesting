module.exports = {
  src_folders: ['e2e/specs'],
  output_folder: 'e2e/reports',
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444, // default selenium-server port
    cli_args: {
      'Webdriver.chrome.driver': require('chromedriver').path
    }
  },
  test_settings: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false
        },
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
