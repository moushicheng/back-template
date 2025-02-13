# Back Template

这是一个 Node.js 后端开发模板，已配置 MySQL、Redis 和日志系统（使用 Winston）。该模板旨在帮助开发人员快速启动后端项目，并提供领域驱动设计（DDD）架构。

## 特性

- **领域驱动设计 (DDD)**: 采用四层分层架构，便于组织和管理代码。
- **数据库集成**: 已配置 MySQL 数据库，支持快速开发。
- **缓存支持**: 集成 Redis 以提升性能。
- **日志记录**: 使用 Winston 作为日志系统，方便调试和监控。
- **环境配置**: 使用 `.env` 文件管理环境变量，轻松配置。
- **静态文件服务**: 可以提供静态资源，如图片和样式。
- **错误处理**: 集成了错误处理中间件，确保错误被妥善处理并反馈给用户。

## 安装

1. 克隆项目：
   ```bash
   git clone https://github.com/moushicheng/back-template.git
   cd back-template
   ```
2. 删除 .git 文件夹以开始独立开发：

   ```
   rm -rf .git
   ```

3. 安装依赖：

   ```
   pnpm install
   ```

4. 运行应用:
   ```
   pnpm dev
   ```

## 使用

- .env.example 只是示例，需要用户自建.env

- 静态文件服务: 项目配置了静态文件目录，默认情况下，静态文件存放在 assets 目录中。确保将必要的静态资源放置于此目录。

## 贡献

欢迎任何形式的贡献！请通过提交问题或拉取请求来参与。

1. Fork 本仓库。
2. 创建你的特性分支 (git checkout -b feature-foobar)。
3. 提交你的更改 (git commit -m 'Add some foobar')。
4. 推送到分支 (git push origin feature-foobar)。
5. 创建一个新的 Pull Request。

## 许可证

该项目使用 MIT 许可证。有关更多详细信息，请查看 LICENSE 文件。
