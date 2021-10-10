module.exports = {
  apps: [
    {
      name: "cwm-backend",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 1337,
      },
    },
  ],
};
