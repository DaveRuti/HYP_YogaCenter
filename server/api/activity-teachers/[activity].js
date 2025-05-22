import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = event.context.params.activity;

    if (!id) {
        return { error: 'Missing ID' };
    }

    //Recupero attività
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

    console.log(activityTeachers);

    if (!activityTeachers) {
        return { error: 'Attività non trovata' };
    }

    //Restituisco attività al client
    return activityTeachers;
});
