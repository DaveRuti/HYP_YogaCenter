import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    try {

        const highlightedActivities = await prisma.activity.findMany({
            where: {
                isHighlighted: true,
            },
            include: {
                image: true,
              /*  date: true, */
            },
        });

        if (!highlightedActivities) {
            return { error: 'Attività non trovata' };
        }

        return highlightedActivities;
    } catch (error) {
        console.error('Error fetching highlighted activities:', error);
        return { error: 'Error retrieving highlighted activities' };
    } finally {
        await prisma.$disconnect();
    }
});