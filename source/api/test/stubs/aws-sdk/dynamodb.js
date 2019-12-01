const DynamoDB = class {
  constructor(options) { }
}
DynamoDB.DocumentClient = class {
  constructor(options) { }
}
const response = {
  Attributes: {},
  Item: {},
  ItemCollectionMetrics: {
    ItemCollectionKey: {},
    SizeEstimateRangeGB: [0.001, 0.04],
  },
  ConsumedCapacity: {
    TableName: 'Stubbed-Table',
    CapacityUnits: 1.1,
  },
}
const promise = (params) => {
  return {
    promise: () => {
      return new Promise((res, rej) => {
        if((params.Item && params.Item.fail) || params.fail) {
          return rej(params)
        }
        return res(response)
      })
    }
  }
}
const stub = (params, next) => {
  if(typeof next === 'function') {
    if((params.Item && params.Item.fail) || params.fail) {
      return next(params)
    }
    return next(null, response)
  }
  return promise(params)
}

DynamoDB.prototype.deleteItem = stub
DynamoDB.prototype.getItem = stub
DynamoDB.prototype.putItem = stub
DynamoDB.prototype.updateItem = stub

DynamoDB.DocumentClient.prototype.delete = stub
DynamoDB.DocumentClient.prototype.get = stub
DynamoDB.DocumentClient.prototype.put = stub
DynamoDB.DocumentClient.prototype.update = stub

module.exports = DynamoDB
