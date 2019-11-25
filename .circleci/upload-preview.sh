#!/bin/bash
USERNAME=${CIRCLE_PROJECT_USERNAME}
REPONAME=${CIRCLE_PROJECT_REPONAME}
PR_NUM=${CIRCLE_PR_NUMBER}
BRANCH=${CIRCLE_BRANCH}

ORG_TMP_DIR=/tmp/patternfly-org-preview

if [ -n "${PR_NUM}" ] # If build is a PR
then
  # Domain names follow the RFC1123 spec [a-Z] [0-9] [-] limited to 253 characters
  # https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
  # So, just replace "/" or "." with "-"
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-$PR_NUM" | tr '[\/|\.]' '-' | cut -c1-253`
  ALREADY_DEPLOYED=`npx surge list | grep ${DEPLOY_SUBDOMAIN}`
elif [ "${BRANCH}" = "master" ]
then
  DEPLOY_SUBDOMAIN=${REPONAME}
else
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-${BRANCH}" | tr '[\/|\.]' '-' | cut -c1-253`
fi

DEPLOY_DOMAIN_NEXT="https://${DEPLOY_SUBDOMAIN}-next.surge.sh"
DEPLOY_DOMAIN_REACT="https://${DEPLOY_SUBDOMAIN}-react.surge.sh"
DEPLOY_DOMAIN_ORG="https://${DEPLOY_SUBDOMAIN}-org.surge.sh"
npx surge --project patternfly-org-demo/patternfly-next/public/ --domain ${DEPLOY_DOMAIN_NEXT}
npx surge --project patternfly-org-demo/patternfly-react/packages/patternfly-4/react-docs/public/ --domain ${DEPLOY_DOMAIN_REACT}

mkdir -p ${ORG_TMP_DIR}/v4
cp -r patternfly-org-demo/public/* ${ORG_TMP_DIR}/v4
npx surge --project ${ORG_TMP_DIR} --domain ${DEPLOY_DOMAIN_ORG}

if [ -n "${PR_NUM}" ] && [ -z "${ALREADY_DEPLOYED}" ] # Leave a Github comment
then
  # Use Issues api instead of PR api because
  # PR api requires comments be made on specific files of specific commits
  GITHUB_PR_COMMENTS="https://api.github.com/repos/${USERNAME}/${REPONAME}/issues/${PR_NUM}/comments"
  echo "Adding github PR comment ${GITHUB_PR_COMMENTS}"
  curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"Core preview: '${DEPLOY_DOMAIN_NEXT}'\nReact preview: '${DEPLOY_DOMAIN_REACT}'\nOrg preview: '${DEPLOY_DOMAIN_ORG}'/v4"}'
else
  echo "Already deployed ${DEPLOY_DOMAIN_NEXT}, ${DEPLOY_DOMAIN_REACT}, and ${DEPLOY_DOMAIN_ORG}"
fi
