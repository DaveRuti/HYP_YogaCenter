import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    // 1) Leggiamo davvero il parametro "teacher"
    const teacherId = event.context.params.teacher;
    if (!teacherId) {
        return { error: 'Missing teacher ID' };
    }

    // 2) Recuperiamo le attività legate a questo teacher
    const teacherActivities = await prisma.activity.findMany({
        where: {
            teach: {
                some: { teacherId: parseInt(teacherId) }
            }
        },
        include: {
            image: true,        // per poter fare activity.image[0].url
            title: true         // (se title non è già campo scalare)
        }
    });

    if (!teacherActivities.length) {
        return { error: 'Nessuna attività trovata per questo insegnante' };
    }

    // 3) Ritorniamo le activities
    return teacherActivities;
});
