module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "cwm"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", ""),
        ssl: env.bool("DATABASE_SSL", false),
        charset: "utf8mb4_unicode_ci",
      },
      options: {
        charset: "utf8mb4_unicode_ci",
      },
    },
  },
});
