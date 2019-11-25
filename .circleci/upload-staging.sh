aws configure set aws_access_key_id ${AWS_ACCESS_KEY}
aws configure set aws_secret_access_key ${AWS_SECRET_KEY}
aws configure set region ${AWS_REGION}

cd patternfly-org-demo
yarn run gatsby-plugin-s3 deploy --yes
aws s3 rm --recursive s3://patternfly-org-staging/v4
aws s3 sync s3://patternfly-org-preview s3://patternfly-org-staging/v4
aws cloudfront create-invalidation --distribution-id EQE4NPRH0CQXJ --paths "/v4/*"
