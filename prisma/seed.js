import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//FILE SEED PER POPOLARE IL DATABASE

async function main() {
    // Pulisce i dati esistenti
    await prisma.teach.deleteMany()
    await prisma.teacherImage.deleteMany()
    await prisma.activity.deleteMany()
    await prisma.teacher.deleteMany()


    // 1. Crea 3 insegnanti
    const teachers = await Promise.all([
        prisma.teacher.upsert({
            where: { name: 'Luca' },
            update: {},
            create: {
                name: 'Luca',
                surname: 'Rossi',
                description: 'Esperto di escursionismo e outdoor',
                image: {
                    create: [{ url: '/images/luca.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Giulia' },
            update: {},
            create: {
                name: 'Giulia',
                surname: 'Bianchi',
                description: 'Insegnante di yoga certificata',
                image: {
                    create: [{ url: '/images/giulia.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Marco' },
            update: {},
            create: {
                name: 'Marco',
                surname: 'Verdi',
                description: 'Guida alpina e fotografo naturalista',
                image: {
                    create: [{ url: '/images/marco.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Sara' },
            update: {},
            create: {
                name: 'Sara',
                surname: 'Neri',
                description: 'Insegnante di meditazione e mindfulness',
                image: {
                    create: [{ url: '/images/sara.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Sara' },
            update: {},
            create: {
                name: 'Sara',
                surname: 'Neri',
                description: 'Insegnante di meditazione e mindfulness',
                image: {
                    create: [{ url: '/images/sara.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Francesco' },
            update: {},
            create: {
                name: 'Francesco',
                surname: 'Gialli',
                description: 'Guida esperta di arrampicata e alpinismo',
                image: {
                    create: [{ url: '/images/francesco.png' }],
                },
            },
        }),
    ])

    // 2. Crea 3 attività con date e immagini
    const activities = await Promise.all([
        prisma.activity.create({
            data: {
                title: 'Yin Yoga',
                description: '',
                isHighlighted: true,
                type: 'YOGA',
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
                title: 'Power Yoga',
                description: 'Sessione di yoga immersi nella natura',
                isHighlighted: false,
                type: 'YOGA',
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
                title: 'Ashtanga Yoga',
                description: 'Impara a fotografare flora e fauna',
                isHighlighted: false,
                type: 'YOGA',
                date: {
                    create: [{ data: new Date('2025-08-10') }],
                },
                image: {
                    create: [{ url: 'https://example.com/foto.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Vinyasa Yoga',
                description: 'Sessione di meditazione al tramonto',
                isHighlighted: false,
                type: 'YOGA',
                date: {
                    create: [{ data: new Date('2025-09-20') }],
                },
                image: {
                    create: [{ url: 'https://example.com/meditazione.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Mindfulness',
                description: 'Sessione di meditazione al tramonto',
                isHighlighted: false,
                type: 'MEDITATION',
                date: {
                    create: [{ data: new Date('2025-10-25') }],
                },
                image: {
                    create: [{ url: 'https://example.com/meditazione.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Zen Meditation',
                description: 'Sessione di meditazione al tramonto',
                isHighlighted: false,
                type: 'MEDITATION',
                date: {
                    create: [{ data: new Date('2025-11-15') }],
                },
                image: {
                    create: [{ url: 'https://example.com/meditazione.jpg' }],
                },
            },
        }),
        prisma.activity.create({
            data: {
                title: 'Pilates',
                description: 'Sessione di meditazione al tramonto',
                isHighlighted: false,
                type: 'PILATES',
                date: {
                    create: [{ data: new Date('2025-12-05') }],
                },
                image: {
                    create: [{ url: 'https://example.com/meditazione.jpg' }],
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