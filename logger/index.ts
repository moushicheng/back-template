const winston = require("winston");
require("winston-daily-rotate-file");
const path = require("path");

// 创建每日旋转日志文件的传输器
const transport = new winston.transports.DailyRotateFile({
  filename: path.join(__dirname, "logs/%DATE%.log"), // 添加实例编号
  datePattern: "YYYY_MM_DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

// 创建 Logger
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    transport, // 文件输出
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
    }),
  ],
});
