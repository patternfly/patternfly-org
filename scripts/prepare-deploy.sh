#!/usr/bin/bash

BUILD_DIR=${TRAVIS_BUILD_NUMBER}-${TRAVIS_COMMIT}
find out -type d -print | xargs rmdir 2>/dev/null
cp -r out $BUILD_DIR
mv $BUILD_DIR out/travis-builds # Save a copy for history
mkdir -p ~/.aws

cat > ~/.aws/credentials << EOL
[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOL