/** tests will be here outside the code folder
  * this ensures the tests are not packaged with the code during deployment
  * and still be maintained in version control
  *
  * the test can be run locally for this code/lambda only
  * or as a full test suite using the test script in /api/package.json
  **/
const chai = require('chai')
const expect = chai.expect

describe('Example Lambda', () => {
  it('Expects item to be intended value', () => {
    const item = true
    expect(item).to.equal(true)
  })
})
