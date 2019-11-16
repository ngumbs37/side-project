curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
rm ./awscli-bundle.zip
curl "https://nodejs.org/dist/v12.13.0/node-v12.13.0.pkg" > "$HOME/Downloads/node-latest.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
rm "$HOME/Downloads/node-latest.pkg"