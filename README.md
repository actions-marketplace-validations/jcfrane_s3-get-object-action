# s3-get-object-action

Allows you to download an s3 object

# Example Usage

```
on: [push]

jobs:
  main:
    runs-on: ubuntu-latest
    name: Get S3 Object
    steps:
      - name:  Getting S3 Object
        id: s3
        uses: jcfrane/s3-get-object-action@v1.0
        with:
          region: ap-southeast-1
          bucket: ${{ secrets.BUCKET }}
          aws-access-key: ${{ secrets.AWS_ACCESS_KEY }}
          aws-secret-key: ${{ secrets.AWS_SECRET_KEY }}
          object-key: build-artifacts/prod.yml
          filename: prod.yml
      - name: Confirming Download
        run: ls -la
```

# Inputs

- **region** - Your S3 Region
- **bucket** - Bucket where you want to get the object, should be in secret
- **aws-access-key** - Your AWS Access Key, should be in secrets
- **aws-secret-key** - Your AWS Access Key, should be in secrets
- **object-key** - The path of the object in your Bucket.
- **filename** - The filename of the object when gets saved.

# Inputs
- **message** - Just a message confirming the operation succeeded.
