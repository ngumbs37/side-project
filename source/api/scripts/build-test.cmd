rmdir /S /Q .\.aws-sam
rmdir /S /Q .\node_modules
SET "s3_bucket=BUCKET_NAME"

for /R %%f in (*.yml) do (
  Set filename=%%~nf%%~xf
  Set directory=%%~df%%~pf
  Set yml_to_yaml=%%~nf.yaml
  sam build -s %%~df%%~pf -t %%~f
  sam package --template-file %%f --s3-bucket %s3_bucket% --output-template-file templates/%%~nf.yaml
)
