import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        //Extracting the ID
        const id = event.context.params.activity;

        if (!id) {
            return {error: 'Missing ID'};
        }

        //Query for activity teachers
        const activityTeachers = prisma.teacher.findMany({
            where: {
                teach: {
                    some: {
                        activityId: parseInt(id)
                    }
                }
            },
            include: {
                image: true,
            }
        });


        //Teachers not found exception
        if (!activityTeachers) {
            return {error: 'Teachers not found'};
        }

        //Return teachers to db client
        return activityTeachers;
    }
    catch (error) {
        console.error('Error during query execution:', error);
        return { error: 'Error during activity teachers fetching:' };
    } finally {
        await prisma.$disconnect(); // Closes connection with db
    }
});
