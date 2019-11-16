Set-ExecutionPolicy -ExecutionPolicy Undefined  -Scope CurrentUser
$url = "https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi"
$outpath = ".\node-v12.13.0-x64.msi"
Invoke-WebRequest -Uri $url -OutFile $outpath
Start-Process -Filepath $outpath
$url = "https://s3.amazonaws.com/aws-cli/AWSCLISetup.exe"
$outpath2 = ".\AWSCLISetup.exe"
Invoke-WebRequest -Uri $url -OutFile $outpath2
Start-Process -Filepath outpath2
