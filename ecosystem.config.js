module.exports = {
  apps: [
    {
      name: 'umoren-ai',
      script: 'npm',
      args: 'start',
      cwd: '/home/ec2-user/llmolp',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/home/ec2-user/.pm2/logs/umoren-ai-error.log',
      out_file: '/home/ec2-user/.pm2/logs/umoren-ai-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
