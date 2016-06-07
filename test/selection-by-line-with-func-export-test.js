var helper = require('./support/helper')
var assert = require('assert')

module.exports = function (cb) {
  helper.run('test/fixtures/single-func.js:1337', function (er, result, log) {
    assert.equal(result, true)
    log.assert(
      'TAP version 13',
      '1..1',
      'ok 1 - test #1 in `test/fixtures/single-func.js`'
    )
    cb(er)
  })
}