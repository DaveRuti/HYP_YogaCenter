import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    return prisma.teacher.findMany({
        include: {
            image: true
        }
    });
});
