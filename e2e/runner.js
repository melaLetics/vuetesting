/* script for starting the server and spawn a child process that runs Nightwatch
 ** to run this file, add "test:e2e": "node e2e/runner.js" to package.json scripts
 ** https://github.com/eddyerburgh/vue-hackernews/blob/master/e2e/runner.js
 */
const spawn = require('cross-spawn')
const app = require('../server')

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  const opts = ['--config', 'e2e/nightwatch.conf.js', '--env', 'chrome']
  const runner = spawn('./node_modules/.bin/nightwatch', opts, {
    stdio: 'inherit'
  })
  runner.on('exit', function(code) {
    server.close()
    process.exit(code)
  })
  runner.on('error', function(err) {
    server.close()
    throw err
  })
})
