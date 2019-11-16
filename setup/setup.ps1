Set-ExecutionPolicy -ExecutionPolicy Undefined  -Scope CurrentUser
$url = "https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi"
$outpath = ".\node-v12.13.0-x64.msi"
if (!(Test-Path $outpath)){
  Invoke-WebRequest -Uri $url -OutFile $outpath
}
Start-Process -Filepath $outpath
$url = "https://s3.amazonaws.com/aws-cli/AWSCLI64PY3.msi"
$outpath2 = ".\AWSCLISetup.msi"
if (!(Test-Path $outpath2)){
  Invoke-WebRequest -Uri $url -OutFile $outpath2
}
Start-Process -Filepath $outpath2
