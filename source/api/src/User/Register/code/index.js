const putItem = require('./lib/putItem')
const faker = require('faker')
const jwt = require('jsonwebtoken')

const userTable = process.env.USER_TABLE || 'test-UserTable'

exports.handler = async (event, context) => {
  console.log('Got event', event)
  const user = initUserData(event)
  await putItem(userTable, user)
  return event
}

const initUserData = (event) => {
  return {
    username: username,
    displayName: username,
    emailAddress: emailAddress,
    emailVerified: false,
  }
}
