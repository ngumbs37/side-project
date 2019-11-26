#!/bin/bash

sam deploy --stack-name $API_NAME \
--template-file ./api.yaml \
--parameter-overrides \
  DeploymentStage=$API_STAGE \
  S3CodeBucket=$S3_BUCKET \
  Stage=$STAGE \
--capabilities CAPABILITY_NAMED_IAM

api_outputs=$(aws cloudformation describe-stacks --stack-name $API_NAME | jq '.["Stacks"][0].Outputs')
restapiid=$(echo ${api_outputs} | jq --raw-output '.[] | select(.ExportName == "RestApi") | .OutputValue')
restapi_deployment=$(aws apigateway create-deployment --rest-api-id ${restapiid} --stage-name $STAGE)
echo $restapi_deployment
