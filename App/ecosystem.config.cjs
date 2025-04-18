module.exports = {
    apps: [{
      name: "dreamdot",
      script: "npm",
      args: "run start",
      autorestart: true,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      max_restarts: 10,
      max_memory_restart: '3G',
      instances: "max",
      exec_mode: "cluster",
      error_file: "./logs/next-error.log",
      out_file: "./logs/next-out.log",
      merge_logs: true,
      env: {
        NODE_ENV: "production",
      }
    }]
  };