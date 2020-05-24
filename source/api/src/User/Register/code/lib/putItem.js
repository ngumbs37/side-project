const uuid = require('uuid/v4')
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()

const put = (table, item) => {
    item.id = item.id || uuid()
    const params = {
      TableName: table,
      Item: item,
      ConditionExpression: 'attribute_not_exists(id)',
    }
    return dynamodb.put(params).promise()
}

module.exports = put
