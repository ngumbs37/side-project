const uuid = require('uuid/v4')
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()

const put = (table, item) => {
  return new Promise((res, rej) => {
    item.id = item.id || uuid()
    const params = {
      TableName: table,
      Item: item,
      ExpressionAttributeNames: {
        '#id': item.id
      },
      ConditionExpression: 'attribute_not_exists(#id)',
      ReturnValues: 'NONE',
    }
    return res(dynamodb.put(params).promise())
  })
}

module.exports = put
