Set-ExecutionPolicy -ExecutionPolicy Undefined  -Scope CurrentUser
$url = "https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi"
$outpath = ".\node-v12.13.0-x64.msi"
if (!(Test-Path $outpath)){
  Invoke-WebRequest -Uri $url -OutFile $outpath
}
$url = "https://s3.amazonaws.com/aws-cli/AWSCLI64PY3.msi"
$outpath2 = ".\AWSCLISetup.msi"
if (!(Test-Path $outpath2)){
  Invoke-WebRequest -Uri $url -OutFile $outpath2
}
$url = "https://download.docker.com/win/stable/InstallDocker.msi"
$outpath3 = ".\Docker.msi"
if (!(Test-Path $outpath3)){
  Invoke-WebRequest -Uri $url -OutFile $outpath3
}
$url = "https://github.com/awslabs/aws-sam-cli/releases/latest/download/AWS_SAM_CLI_64_PY3.msi"
$outpath4 = ".\AWS_SAM.msi"
if (!(Test-Path $outpath4)){
  Invoke-WebRequest -Uri $url -OutFile $outpath4
}
npm run i:vue
Start-Process -Filepath $outpath -Wait
Start-Process -Filepath $outpath2 -Wait
Start-Process -Filepath $outpath3 -Wait
Start-Process -Filepath $outpath4 -Wait
