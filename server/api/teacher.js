import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {

        const { id } = event.context.params.id;

        const teacher = await prisma.teacher.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                image: true,
            },
        });

        if (!teacher) {
            return { error: 'Teacher not found' };
        }

        return teacher;
    } catch (error) {
        console.error('Error during the query:', error);
        return { error: 'Error retrieving the teacher' };
    } finally {
        await prisma.$disconnect();
    }
});