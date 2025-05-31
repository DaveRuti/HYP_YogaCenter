import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        //Extracting the ID
        const id = event.context.params.activity;

        if (!id) {
            return { error: 'Missing ID' };
        }

        //Query for the activity
        const activity = await prisma.activity.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                image: true,
                timeSchedule: true,
            },
        });

        //Activity not found exception
        if (!activity) {
            return { error: 'Activity not found' };
        }

        //Return Activity to db client
        return activity;
    } catch (error) {
        console.error('Error during query execution:', error);
        return { error: 'Error during activity fetching:' };
    } finally {
        await prisma.$disconnect(); // Closes connection with db
    }
});