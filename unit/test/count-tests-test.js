var subject = require('../../lib/count-tests')

module.exports = {
  "counts the number of deeply nested things with 'type' test": function () {
    var result = subject([
      {type: 'test'},
      {type: 'other thing'},
      {
        stuff: [
          {type: 'nooooo'},
          {type: 'test'}
        ]
      }
    ])

    assert.equal(result, 2)
  }
}