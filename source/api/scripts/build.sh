for i in $(find ./src -not -path '*/.aws-sam/*' -not -path '*/node_modules/*' -name '*.yml'); do
    filename=$(basename $i)
    directory=$(dirname $i)
    local_aws_sam=$directory"/.aws-sam/" # local built artifacts of the lambda
    yml_to_yaml=${filename/yml/yaml} #
    path_for_compiled_templates='templates/'$yml_to_yaml
    echo $path_for_compiled_templates
    sam build -s $directory -t $i
    sam package --template-file $i --s3-bucket $S3_BUCKET --output-template-file $path_for_compiled_templates
done
aws s3 cp templates s3://$S3_BUCKET --recursive
rm -rf .aws-sam/
