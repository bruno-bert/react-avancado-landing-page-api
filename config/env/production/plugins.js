module.exports = ({ env }) => ({
  upload: {
    /* provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    }, */
    provider: "dropbox",
    providerOptions: {
      //accessKeyId: env("DROPBOX_ACCESS_KEY_ID"),
      //secretAccessKey: env("DROPBOX_ACCESS_SECRET"),
      accessToken: env("DROPBOX_ACCESS_TOKEN")
    }
  }
});
