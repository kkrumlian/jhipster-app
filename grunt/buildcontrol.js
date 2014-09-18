module.exports = {
  options: {
    commit: true,
    push: false,
    connectCommits: false,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  heroku: {
    options: {
      dir: 'deploy/heroku',
      remote: 'heroku',
      branch: 'master'
    }
  },
  openshift: {
    options: {
      dir: 'deploy/openshift',
      remote: 'openshift',
      branch: 'master'
    }
  }
};