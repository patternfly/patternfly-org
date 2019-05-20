import wood
import pathlib
import boto3

local_base = pathlib.Path('./out')
bucket = boto3.resource('s3').Bucket('patternfly-org-staging')

print('Fetching files in remote bucket')
to_deploy = wood.root(local_base)
deployed = wood.s3.objects_to_root(bucket.objects.all())

comparison = wood.compare(deployed, to_deploy)

print('Writing changes to buket')
syncer = wood.s3.Syncer(local_base, bucket)
syncer.sync(comparison)

print('Invalidating cloudfront')
cloudfront = boto3.client('cloudfront')
invalidator = wood.cloudfront.Invalidator(cloudfront, 'EQE4NPRH0CQXJ', 'Travis purge')
invalidator.invalidate(comparison)
