module.exports = {
  apps: [
    {
      name: 'cwm-frontend',
      script: 'npm',
      args: 'start',
      cwd: './.next',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
