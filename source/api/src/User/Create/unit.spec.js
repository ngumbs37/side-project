require('module-alias/register')
const rewiremock = require('rewiremock').default
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

const putItem = rewiremock.proxy('./code/lib/putItem', {
  'aws-sdk': require('@stubs/aws-sdk')
})

describe('User Create', () => {
  describe('putItem', () => {
    it('successful dynamodb put', async () => {
      let result = await putItem('table', {})
      console.log(result)
      expect(result).to.haveOwnProperty('Item')
      expect(result.Item).to.be.an('object')
    })
    it('unsuccessful dynamodb put', (done) => {
      putItem('table', {fail: true}).catch((result)=>{
        expect(result).to.be.an('object')
        expect(result.Attributes).to.be.undefined
        done()
      })
    })
  })
})
