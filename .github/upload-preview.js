const path = require('path');
const { Octokit } = require('@octokit/rest')
const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });
const surge = require('surge');
const publishFn = surge().publish();

// From github actions
const ghrepo = process.env.GITHUB_REPOSITORY || '';

// From CircleCI
const owner = process.env.CIRCLE_PROJECT_USERNAME || ghrepo.split('/')[0]; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME || ghrepo.split('/')[1];
const prnum = process.env.CIRCLE_PR_NUMBER || process.env.GH_PR_NUM;

let uploadFolder = process.argv[2];
let uploadName = process.argv[3] || uploadFolder;
if (!uploadFolder) {
  console.log('Usage: upload-preview uploadFolder');
  process.exit(1);
}

// The two if blocks are workarounds for GH not fully using updated workflow
// Can be removed after workflow update is merged
if(uploadFolder === 'build/patternfly-org') {
  uploadFolder = 'build/patternfly-org/site';
}
if(uploadName === 'v4') {
  uploadName = 'site';
}

const uploadFolderName = path.basename(uploadFolder);
let uploadURL = `${repo}${prnum ? `-pr-${prnum}` : ''}`.replace(/[\/|\.]/g, '-');

uploadURL += `-${uploadName}`;
uploadURL += '.surge.sh';

publishFn({
  project: uploadFolder,
  p: uploadFolder,
  domain: uploadURL,
  d: uploadURL,
  e: 'https://surge.surge.sh',
  endpoint: 'https://surge.surge.sh'
});

function tryAddComment(comment, commentBody) {
  if (!commentBody.includes(comment)) {
    return comment;
  }
  return '';
}

if (prnum) {
  octokit.issues.listComments({
    owner,
    repo,
    issue_number: prnum
  })
    .then(res => res.data)
    .then(comments => {
      let commentBody = '';
      const existingComment = comments.find(comment => comment.user.login === 'patternfly-build');
      if (existingComment) {
        commentBody += existingComment.body.trim();
        commentBody += '\n';
      }

      if (uploadName === 'site') {
        commentBody += tryAddComment(`Preview: https://${uploadURL}`, commentBody);
      }
      else if (uploadFolderName === 'coverage') {
        commentBody += tryAddComment(`A11y report: https://${uploadURL}`, commentBody);
      }

      if (existingComment) {
        octokit.issues.updateComment({
          owner,
          repo,
          comment_id: existingComment.id,
          body: commentBody
        }).then(() => console.log('Updated comment!'));
      } else {
        octokit.issues.createComment({
          owner,
          repo,
          issue_number: prnum,
          body: commentBody
        }).then(() => console.log('Created comment!'));
      }
    });
}
