s3_bucket=$S3_BUCKET
for i in $(find ./src -name '*.yml' -not -path "**/.aws-sam/*" ); do
    filename=$(basename $i)
    directory=$(dirname $i)
    local_aws_sam=$directory"/.aws-sam/" # local built artifacts of the lambda
    yml_to_yaml=${filename/yml/yaml} # 
    path_for_compiled_templates='templates/'$yml_to_yaml
    rm -rf $local_aws_sam # remove local built package for deployment
    sam build -s $directory -t $i # builds package to deploy
    sam package --template-file $i --s3-bucket $s3_bucket --output-template-file $path_for_compiled_templates # uploads pagkage and uploads to s3
    #aws cloudformation package --template-file $i --s3-bucket $s3_bucket --output-template-file $path_for_compiled_templates
done
aws s3 cp templates s3://$s3_bucket --recursive
rm -rf .aws-sam/
