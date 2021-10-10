module.exports = {
  apps: [
    {
      name: "cwm-backend",
      script: "npm",
      args: "start",
      cwd: "./build",
      instances: 1,
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
