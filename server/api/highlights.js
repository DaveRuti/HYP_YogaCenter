import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    try {

        //Query for highlighted activities
        const highlightedActivities = await prisma.activity.findMany({
            where: {
                isHighlighted: true,
            },
            include: {
                image: true,
              /*  date: true, */
            },
        });

        //Highlighted activities not found exception
        if (!highlightedActivities) {
            return { error: 'Attività non trovata' };
        }

        //Return highlighted activities to db client
        return highlightedActivities;
    } catch (error) {
        console.error('Error fetching highlighted activities:', error);
        return {error: 'Error retrieving highlighted activities'};
    }
    finally {
        await prisma.$disconnect() // Closes connection with db
    }
});