import wood
import pathlib
import boto3

local_base = pathlib.Path('./out')
bucket = boto3.resource('s3').Bucket('patternfly-org-staging')

# create representations of the local and remote trees
print('Fetching files in bucket')
to_deploy = wood.root(local_base)
deployed = wood.s3.objects_to_root(bucket.objects.all())

# compare the two as if they were local directories
comparison = wood.compare(deployed, to_deploy)

# write all changes (additions, modifications, deletions) to the S3 bucket
syncer = wood.s3.Syncer(local_base, bucket)
syncer.sync(comparison)

# # invalidate the minimum amount in CloudFront to ensure the changes are
# # visible, using prefix grouping where possible
print('Invalidating cloudfront')
cloudfront = boto3.client('cloudfront')
invalidator = wood.cloudfront.Invalidator(cloudfront, 'EQE4NPRH0CQXJ', 'Travis purge')
invalidator.invalidate(comparison)
