import { createClient, RedisClientType, RedisDefaultModules } from "redis";

let redisClient: RedisClientType<RedisDefaultModules & any> | undefined =
  undefined;
let clientPromise: Promise<void> | undefined;

async function create() {
  const client = createClient();

  client.on("error", (err: any) => console.log("Redis Client Error", err));

  clientPromise = client
    .connect()
    .then(() => {
      redisClient = client as any;
    })
    .catch((err) => {
      console.error("Failed to connect to Redis", err);
    });
}

// 创建 Redis 客户端
create();

// 获取 Redis 客户端的函数
export async function getRedisClient(): Promise<
  RedisClientType<RedisDefaultModules & any>
> {
  if (!clientPromise) {
    throw new Error("Redis client is not being created.");
  }
  await clientPromise; // 等待客户端创建完成
  if (!redisClient) {
    throw new Error("Redis client is not initialized.");
  }

  return redisClient;
}
