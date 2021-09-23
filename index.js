const core = require('@actions/core')
const github = require('@actions/github')
const aws = require('aws/sdk')
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

  AWS.config.update({ 
    region,
    accessKeyId: accessKey,
    secretKey: secretKey 
  });

  const s3 = new AWS.S3({apiVersion: '2006-03-01'})
  const object = s3.getObject(params)
  fs.writeFileSync('./prod.yml', object);

  core.setOutput('message', 'Done')

} catch (error) {
  core.setFailed(error.message)
}
