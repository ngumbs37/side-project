const aws = {}

aws.Lambda = require('./aws-sdk/lambda')
aws.DynamoDB = require('./aws-sdk/dynamodb')

module.exports = aws
