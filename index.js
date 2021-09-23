const core = require('@actions/core')
const github = require('@actions/github')
const aws = require('aws-sdk')
const fs = require('fs')

try {
  const bucket = core.getInput('bucket')
  const region = core.getInput('region')
  const accessKey = core.getInput('aws-access-key')
  const secretKey = core.getInput('aws-secret-key')

  const params = {
    Bucket: bucket,
    Key: 'build_artifacts/prod.yml'
  }

  aws.config.update({ 
    region,
    accessKeyId: accessKey,
    secretKey: secretKey 
  });

  const s3 = new aws.S3({apiVersion: '2006-03-01'})
  s3.getObject(params, function (response) {
    fs.writeFile('./prod.yml', response.Body, function () {
      core.setOutput('message', 'Done')
    });
  })


} catch (error) {
  core.setFailed(error.message)
}
