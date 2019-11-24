SET "s3_bucket=BUCKET_NAME"
SET "api_name=demoApi"
SET "deploymentStage=Testing"
SET "stage=test"

sam deploy --stack-name %api_name% ^
--template-file .\api.yaml ^
--parameter-overrides DeploymentStage=%deploymentStage% ^
S3CodeBucket=%s3_bucket% ^
Stage=%stage% ^
--capabilities CAPABILITY_NAMED_IAM
