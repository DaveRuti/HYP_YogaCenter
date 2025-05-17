import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        //Estraggo l'id
        const { id } = event.context.params.id;

        //Recupero attività
        const activity = await prisma.activity.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                image: true,
                date: true,
            },
        });

        //Attività non trovata
        if (!activity) {
            return { error: 'Attività non trovata' };
        }

        //Restituisco attività al client
        return activity;
    } catch (error) {
        console.error('Errore durante la query:', error);
        return { error: 'Errore nel recupero dell\'attività' };
    } finally {
        await prisma.$disconnect(); // Chiude la connessione con il DB
    }
});