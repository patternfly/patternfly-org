aws s3 rm --recursive s3://patternfly-org-staging
# TODO: Proper S3 meta tags for redirects
aws s3 sync build/patternfly-org s3://patternfly-org-staging --exclude "*" \
    --include "*.html" \
    --include "*.json" \
    --exclude "static/**/*.json" \
    --include "sw.js" \
    --cache-control "public, max-age=0, must-revalidate"

aws s3 sync build/patternfly-org s3://patternfly-org-staging --include "*" \
    --exclude "*.html" \
    --exclude "*.json" \
    --include "static/**/*.json" \
    --exclude "sw.js" \
    --cache-control "public, max-age=31536000, immutable"

aws cloudfront create-invalidation --distribution-id EQE4NPRH0CQXJ --paths "/*"
