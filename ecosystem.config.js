module.exports = {
  apps: [
    {
      name: 'badminton-api',
      script: './server.js',
      cwd: './',
      exec_mode: 'fork',
      instances: 1,
      watch: false,
      autorestart: true,
      max_memory_restart: '250M',
      log_date_format: 'DD-MM-YYYY hh:mm:ss A',
      combine_logs: true,
      min_uptime: 10000,
      max_restarts: 25,
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
