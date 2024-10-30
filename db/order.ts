import { prisma } from ".";

export async function createOrder() {
  return await prisma.order.create({
    data: {},
  });
}
