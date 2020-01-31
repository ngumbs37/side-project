exports.handler = async function(event, context) {
  console.log('Got an event for User Get', event)
  var res = {
    "headers": {
      "statusCode": 204,
      "statusCodei": () => {},
      "Content-Type": "*/*"
    },
    "body": "Faisal just got a user"
  }
  return res
}
