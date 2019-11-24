const putItem = require('./lib/putItem')
const faker = require('faker')

const userTable = process.env.USER_TABLE || 'test-UserTable'

exports.handler = async function(event, context) {
  console.log('Got event', event);
  const item = {
    money: faker.random.number(10000000000000)
  }
  await putItem(userTable, item)
  return event;
}
