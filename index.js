const core = require('@actions/core')
const github = require('@actions/github')

try {
  const bucket = core.getInput('bucket')
  const accessKey = core.getInput('accessKey')

  core.setOutput('message',  {
    bucket, accessKey
  })

} catch (error) {
  core.setFailed(error.message)
}
