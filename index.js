const core = require('@actions/core')
const github = require('@actions/github')

try {
  const bucket = core.getInput('bucket')
  const accessKey = core.getInput('aws-access-key')
  const secretKey = core.getInput('aws-secret-key')

  core.setOutput('message',  {
    bucket, accessKey, secretKey
  })

} catch (error) {
  core.setFailed(error.message)
}
