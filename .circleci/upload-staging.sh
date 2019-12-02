aws configure set aws_access_key_id ${AWS_ACCESS_KEY}
aws configure set aws_secret_access_key ${AWS_SECRET_KEY}
aws configure set region ${AWS_REGION}

# TODO: Proper S3 meta tags for redirects and caching
aws s3 rm --recursive s3://patternfly-org-staging
aws s3 sync build/patternfly-org s3://patternfly-org-staging
aws cloudfront create-invalidation --distribution-id EQE4NPRH0CQXJ --paths "/*"
