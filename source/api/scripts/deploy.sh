#!/bin/bash
if ! aws cloudformation describe-stacks --stack-name $API_NAME; then
  aws cloudformation create-stack --stack-name $API_NAME \
  --template-body file://api.yaml \
  --parameters ParameterKey=DeploymentStage,ParameterValue=$STAGE \
  ParameterKey=S3CodeBucket,ParameterValue=$S3_BUCKET \
  --capabilities CAPABILITY_NAMED_IAM && aws cloudformation wait stack-create-complete --stack-name $API_NAME
else
  aws cloudformation update-stack --stack-name $API_NAME \
  --template-body file://api.yaml \
  --parameters ParameterKey=DeploymentStage,ParameterValue=$STAGE \
  ParameterKey=S3CodeBucket,ParameterValue=$S3_BUCKET \
  --capabilities CAPABILITY_NAMED_IAM && aws cloudformation wait stack-update-complete --stack-name $API_NAME
fi
api_outputs=$(aws cloudformation describe-stacks --stack-name $API_NAME | jq '.["Stacks"][0].Outputs')
restapiid=$(echo ${api_outputs} | jq --raw-output '.[] | select(.ExportName == "RestApi") | .OutputValue')
restapi_deployment=$(aws apigateway create-deployment --rest-api-id ${restapiid} --stage-name $STAGE)
echo $restapi_deployment
