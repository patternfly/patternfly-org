# Remove current files
aws s3 rm s3://patternfly-org-staging --recursive
# Upload new files
aws s3 sync out s3://patternfly-org-staging
# Invalidate everything on CDN
aws cloudfront create-invalidation --distribution-id EQE4NPRH0CQXJ --paths "/*"