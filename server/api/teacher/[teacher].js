import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        //Extracting the ID
        const id = event.context.params.teacher;

        //Query for the teacher
        const teacher = await prisma.teacher.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                image: true,
            },
        });

        //Teacher not found exception
        if (!teacher) {
            return { error: 'Teacher not found' };
        }

        //Return teacher to db client
        return teacher;
    } catch (error) {
        console.error('Error during the query:', error);
        return { error: 'Error retrieving the teacher' };
    } finally {
        await prisma.$disconnect(); // Closes connection with db
    }
});