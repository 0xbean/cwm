module.exports = ({ env }) =>
  process.env.NODE_ENV === "production"
    ? {
        upload: {
          provider: "aws-s3",
          providerOptions: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
            region: "us-east-1",
            params: {
              Bucket: "cwm-files",
            },
          },
        },
      }
    : {};
