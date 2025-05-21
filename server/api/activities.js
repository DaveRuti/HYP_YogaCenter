import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        return await prisma.activity.findMany({
            include: {
                image: true,
            }
        });

    } catch (error) {
        console.error('Errore durante la query:', error)
        return { error: 'Errore nel recupero delle attività' }
    } finally {
        await prisma.$disconnect() // Chiude la connessione con il DB
    }
})