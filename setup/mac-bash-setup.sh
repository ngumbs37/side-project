awszip="awscli-bundle.zip"
aws="./awscli-bundle"
curl "https://s3.amazonaws.com/aws-cli/$awszip" -o $awszip
unzip awscli-bundle.zip
echo "Downloaded and unpackaged AWS CLI"
echo "Installing AWS CLI"
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws 
sleep 10
echo "Finished installing AWS CLI"
rm $awszip
rm -rf $aws
echo "Removed AWS CLI installation files"

node="node-v12.13.0.pkg"
echo "Downloading NodeJs v12.13.0"
curl "https://nodejs.org/dist/v12.13.0/$node" -o $node
echo "Installing NodeJs v12.13.0"
sudo installer -store -pkg $node -target "/"
echo "Finished installing NodeJs v12.13.0"
rm $node
echo "Removed installation $node file"

npm run i:vue