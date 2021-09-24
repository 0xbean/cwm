module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    path: "/admin",
    build: {
      host: "/admin",
      backend: `http://${env("HOST", "0.0.0.0")}/strapi`,
      plugins: {
        source: "backend",
        folder: "/strapi",
      },
    },
    auth: {
      secret: env("ADMIN_JWT_SECRET", "7b225cee2409b2c159ae736894b63e35"),
    },
  },
});
