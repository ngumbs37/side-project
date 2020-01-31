require('module-alias/register')
const rewiremock = require('rewiremock').default
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

const putItem = rewiremock.proxy('./code/lib/putItem', {
  'aws-sdk': require('@stubs/aws-sdk')
})

describe('User Register', () => {
  describe('putItem', () => {
    it('successful dynamodb put', async () => {
      const result = await putItem('table', {})
      expect(result).to.haveOwnProperty('Item')
      expect(result.Item).to.be.an('object')
    })

    it('unsuccessful dynamodb put', (done) => {
      putItem('table', {fail: true}).catch((result)=>{
        console.log(result)
        expect(result).to.be.an('object')
        expect(result.Attributes).to.be.undefined
        done()
      })
    })
  })
})
