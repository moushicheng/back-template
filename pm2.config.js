// pm2.config.js
module.exports = {
  apps: [
    {
      name: "ropay", // 应用名称
      script: "ts-node", // 使用 ts-node 运行
      args: "main.ts", // 你的 TypeScript 文件
      instances: "max", // 使用所有可用的 CPU 核心
      exec_mode: "cluster", // 启用集群模式
      autorestart: true, // 自动重启
      watch: false, // 是否监视文件变动
      env: {
        NODE_ENV: "development", // 开发环境变量
        isDev: "false",
        PORT: 3001, // 设置端口为 3001
      },
      env_production: {
        NODE_ENV: "production", // 生产环境变量
        isDev: "false",
        PORT: 3001, // 设置端口为 3001
      },
    },
  ],
};
