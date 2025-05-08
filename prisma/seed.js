import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//FILE SEED PER POPOLARE IL DATABASE

async function main() {
    // Pulisce i dati esistenti
    await prisma.image.deleteMany();
    await prisma.teacher.deleteMany();

    // 1. Crea 3 insegnanti
    const teachers = await Promise.all([
        await prisma.teacher.upsert({
            where: { name: 'Luca' }, // usa una chiave unica reale
            update: {},
            create: {
                name: 'Luca',
                surname: 'Rossi',
                description: 'Esperto di escursionismo e outdoor',
                image: {
                    create: [{ url: 'https://example.com/luca.jpg' }],
                },
            },
        }),
    prisma.teacher.create({
            data: {
                name: 'Giulia',
                surname: 'Bianchi',
                description: 'Insegnante di yoga certificata',
                image: {
                    create: [{ url: 'https://example.com/giulia.jpg' }],
                },
            },
        }),
        prisma.teacher.create({
            data: {
                name: 'Marco',
                surname: 'Verdi',
                description: 'Guida alpina e fotografo naturalista',
                image: {
                    create: [{ url: 'https://example.com/marco.jpg' }],
                },
            },
        }),
    ])

    // 2. Crea 3 attività con date e immagini
    const activities = await Promise.all([
        prisma.activity.create({
            data: {
                title: 'Trekking in montagna',
                description: 'Escursione panoramica tra i monti',
                isHighlighted: true,
                date: {
                    create: [{ data: new Date('2025-06-15') }],
                },
                image: {
                    create: [{ url: 'https://example.com/trekking.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Lezione di yoga all\'aperto',
                description: 'Sessione di yoga immersi nella natura',
                isHighlighted: false,
                date: {
                    create: [{ data: new Date('2025-07-01') }],
                },
                image: {
                    create: [{ url: 'https://example.com/yoga.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Workshop di fotografia naturalistica',
                description: 'Impara a fotografare flora e fauna',
                isHighlighted: false,
                date: {
                    create: [{ data: new Date('2025-08-10') }],
                },
                image: {
                    create: [{ url: 'https://example.com/foto.jpg' }],
                },
            },
        }),
    ])

    // 3. Crea le relazioni tra insegnanti e attività
    await Promise.all([
        prisma.teach.create({
            data: {
                teacherId: teachers[0].id,
                activityId: activities[0].id,
            },
        }),
        prisma.teach.create({
            data: {
                teacherId: teachers[1].id,
                activityId: activities[1].id,
            },
        }),
        prisma.teach.create({
            data: {
                teacherId: teachers[2].id,
                activityId: activities[2].id,
            },
        }),
    ])

    console.log('Database popolato con successo!')
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e)
        prisma.$disconnect()
    })