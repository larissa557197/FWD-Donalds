// garante que teremos pelo menos UMA conexão com o banco de dados

import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

// usar para chamar o banco de dados
export const db = prisma;
