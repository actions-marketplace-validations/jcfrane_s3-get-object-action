const core = require('@actions/core')
const github = require('@actions/github')
const aws = require('aws-sdk')
const fs = require('fs')
const path = require('path')

try {
  const bucket = core.getInput('bucket')
  const region = core.getInput('region')
  const accessKey = core.getInput('aws-access-key')
  const secretKey = core.getInput('aws-secret-key')

  const params = {
    Bucket: bucket,
    Key: 'build_artifacts/prod.yml'
  }

  aws.config({ 
    region,
    accessKeyId: accessKey,
    secretAccessKey: secretKey 
  });

  const s3 = new aws.S3({apiVersion: '2006-03-01'})

  const tempFileName = path.join('./', 'prod.yml')
  const tempFile = fs.createWriteStream(tempFileName)
  s3.getObject(params).createReadStream().pipe(tempFile)
  core.setOutput('message', 'Finished downloading')
  
  // s3.getObject(params, function (response) {
  //   fs.writeFile('./prod.yml', response.Body, function () {
  //     console.log('H')
  //     core.setOutput('message', response.Body)
  //   })
  // })



} catch (error) {
  core.setFailed(error.message)
}
