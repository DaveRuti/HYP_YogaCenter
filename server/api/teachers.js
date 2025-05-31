import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    try {
        //Query for teachers
        return prisma.teacher.findMany({
            include: {
                image: true
            }
        });
    }
    catch (error) {
            console.error('Error during query execution:', error);
            return { error: 'Error during teachers fetching:' };
    } finally {
        await prisma.$disconnect(); // Closes connection with db
    }
});
