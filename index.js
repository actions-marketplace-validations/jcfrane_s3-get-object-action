const core = require('@actions/core')
const github = require('@actions/github')

try {
  console.log('MEOW')
  const bucket = core.getInput('bucket')
  console.log('Bucket', bucket)
  core.setOutput('message', 'sucessfully executed')

} catch (error) {
  console.log('meow')
  core.setFailed(error.message)
}
