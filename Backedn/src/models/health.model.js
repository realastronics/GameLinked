import prisma from "../lib/prisma.js";

export const checkDatabaseConnection = async () => {
  await prisma.$queryRaw`SELECT 1`;
};