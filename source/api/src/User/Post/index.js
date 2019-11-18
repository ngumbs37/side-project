exports.handler = async function(event, context) {
  console.log('Got an event for User Get', event);
  var res ={
    "statusCode": 204,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": "Faisal just Posted"
  };
  return res;
}
