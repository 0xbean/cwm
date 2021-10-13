module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY"),
      secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
      region: "us-east-1",
      params: {
        Bucket: "cwm-files",
      },
    },
  },
});
