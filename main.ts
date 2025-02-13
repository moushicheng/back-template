import Koa from "koa";
import Router from "@koa/router";
import path from "path";
import serve from "koa-static";
import { logger } from "./src/infrastructure/logger";
import { registerController } from "./src/controller";
async function main() {
  const app = new Koa();
  const router = new Router();

  // 设置静态文件目录
  const staticPath = path.join(__dirname, "./assets"); // 假设图片存放在 public 目录
  app.use(serve(staticPath));

  //错误
  app.use(async (ctx, next) => {
    try {
      await next(); // 执行后续中间件
    } catch (err) {
      if (err instanceof Error) {
        logger.error("@koa error", { error: err.message });
        console.log(err);
      } else {
        logger.error("@koa error", {
          error: "An unknown error occurred.",
        });
      }
      // 捕获错误并处理
      ctx.body = '服务器内部错误'
    }
  });

  app.use(router.routes()).use(router.allowedMethods());

  registerController();

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}
main();
