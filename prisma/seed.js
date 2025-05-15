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
                shortDescription: 'Yoga and meditation are not about doing more, but about coming back to what’s already here.',
                description: 'Luca brings a calm and grounded presence to every class, combining the physical practice of yoga with the inner ' +
                    'stillness of meditation. With over 10 years of experience, he is certified in both Hatha and Yin Yoga, and has completed ' +
                    'advanced training in mindfulness and traditional meditation techniques. His sessions offer a holistic approach that integrates' +
                    ' movement, breathwork, and silent reflection. Whether guiding a dynamic asana practice or a quiet meditation, Luca creates ' +
                    'a space where students can slow down, reconnect, and cultivate lasting inner peace. Known for his clear instructions, ' +
                    'soothing voice, and compassionate teaching style, Luca supports each individual in their unique journey—on the mat and beyond.',
                cv: '2017 – 500-Hour Hatha Yoga Teacher Training (Yoga Alliance Certified)\n' +
                    '\n' +
                    '2017–2018 – Yoga Instructor at Samadhi Yoga Studio, Florence\n' +
                    '\n' +
                    '2019 – Yin Yoga Teacher Training (100 hours, Paul Grilley Method)\n' +
                    '\n' +
                    '2020 – Mindfulness Meditation Teacher Certification (200 hours, Mindful Academy International)\n' +
                    '\n' +
                    '2021 – Conducted “Mindful Living” Online Workshop Series\n' +
                    '\n' +
                    '2022 – Advanced Pranayama & Yoga Philosophy Training, Rishikesh, India\n' +
                    '\n' +
                    '2022 – Led “Breath & Balance” Yoga Weekend, Lake Como\n' +
                    '\n' +
                    '2023 – Led “Silence & Stillness” Meditation Retreat, Tuscany\n' +
                    '\n' +
                    '2018–Present – Freelance Yoga & Meditation Teacher',
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
                shortDescription: 'Yoga, for me, is a return to self.',
                description: 'With a gentle yet grounded approach, Giulia guides her students on a journey of body awareness and inner balance. ' +
                    'She discovered yoga during a transformative trip to India and later completed a 500-hour Yoga Alliance certified training, ' +
                    'specializing in Hatha and Vinyasa Yoga. Her classes blend mindful movement, breath awareness, and precise alignment, ' +
                    'creating a welcoming space for practitioners of all levels. Whether you\'re new to yoga or looking to deepen your practice, ' +
                    'Giulia\'s sessions offer a safe and supportive environment to reconnect with yourself. Beyond teaching, ' +
                    'she continues to study yoga philosophy and deepen her personal practice, sharing her passion both on and off the mat.',
                cv: '2016 – Discovered yoga during a trip to India\n' +
                    '\n' +
                    '2017 – Completed 500-Hour Yoga Teacher Training (Yoga Alliance Certified – Hatha & Vinyasa)\n' +
                    '\n' +
                    '2018–2019 – Yoga Instructor at Ananda Yoga Studio, Bologna\n' +
                    '\n' +
                    '2019 – Attended "Art of Sequencing" Workshop (with Shiva Rea – 30 hours)\n' +
                    '\n' +
                    '2020 – Began teaching as a freelance instructor in Milan (group & private classes)\n' +
                    '\n' +
                    '2021 – Led “Flow & Stillness” Weekend Retreat, Lake Garda\n' +
                    '\n' +
                    '2022 – Completed Advanced Alignment & Adjustments Course (50 hours)\n' +
                    '\n' +
                    '2023 – Hosted “Yoga for Resilience” Online Workshop Series\n' +
                    '\n' +
                    '2020–Present – Freelance Yoga Teacher (Hatha & Vinyasa)',
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
                shortDescription: 'Pilates is not just a workout; it’s a way to connect with your body and mind.',
                description: 'Marco is a passionate and experienced Pilates teacher, known for his dynamic energy and deep understanding of the body. ' +
                    'With a background in functional movement and postural alignment, he helps students build strength, flexibility, and body awareness ' +
                    'in a safe and engaging way. Trained in both mat and reformer Pilates, Marco tailors each class to meet the needs of his students—whether ' +
                    'they\'re looking to improve posture, recover from injury, or simply feel stronger and more balanced in their daily life. His teaching ' +
                    'style is clear, encouraging, and focused on mindful movement. Marco believes in empowering each person to move with confidence and ease, ' +
                    'regardless of age or experience.',
                cv: '2015 – Completed Mat Pilates Instructor Certification (Balanced Body)\n' +
                    '\n' +
                    '2016 – Began teaching at Studio Pilates Milano (group & one-to-one classes)\n' +
                    '\n' +
                    '2017 – Completed Reformer Pilates Certification (Balanced Body – 80 hours)\n' +
                    '\n' +
                    '2018 – Attended “Functional Anatomy for Movement Professionals” Workshop (30 hours)\n' +
                    '\n' +
                    '2019–2021 – Pilates Instructor at Centro Movimento Integrato, Milan\n' +
                    '\n' +
                    '2021 – Specialized in Postural Pilates (45-hour advanced training)\n' +
                    '\n' +
                    '2022 – Launched private Pilates sessions online and in-home\n' +
                    '\n' +
                    '2023 – Led “Core & Control” Intensive Weekend for intermediate students\n' +
                    '\n' +
                    '2022–Present – Freelance Pilates Instructor',
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
                shortDescription: 'Movement is medicine. My mission is to guide every student toward strength, balance, and inner peace.',
                description: 'Sara combines the precision and strength of Pilates with the mindfulness and fluidity of Yoga to offer ' +
                    'a balanced and holistic approach to movement and wellness. With over 8 years of experience, she is certified in ' +
                    'both Pilates mat and reformer techniques, as well as in Hatha and Vinyasa Yoga. Her classes focus on building core ' +
                    'strength, improving flexibility, and cultivating body awareness through mindful breath and alignment. Whether through ' +
                    'Pilates exercises or yoga flows, Sara creates an inclusive and supportive environment where students of all levels ' +
                    'can progress safely and confidently. Passionate about helping people reconnect with their bodies, Sara believes that ' +
                    'combining these two disciplines offers powerful tools for physical health and mental clarity.',
                cv: '2015 – Certified Pilates Mat Instructor (Balanced Body)\n' +
                    '\n' +
                    '2016 – Completed Hatha Yoga Teacher Training (200 hours, Yoga Alliance)\n' +
                    '\n' +
                    '2017 – Pilates Reformer Certification (Balanced Body)\n' +
                    '\n' +
                    '2018 – Began teaching Pilates and Yoga classes at Wellness Studio Milano\n' +
                    '\n' +
                    '2019 – Attended “Yoga for Flexibility” Workshop (30 hours)\n' +
                    '\n' +
                    '2020 – Completed Vinyasa Yoga Teacher Training (200 hours)\n' +
                    '\n' +
                    '2021 – Led “Mindful Movement” Online Pilates & Yoga Program\n' +
                    '\n' +
                    '2022 – Specialized in Pilates for Rehabilitation (advanced course)\n' +
                    '\n' +
                    '2023 – Started freelance teaching Pilates and Yoga both in studio and online\n' +
                    '\n' +
                    '2018–Present – Pilates & Yoga Instructor',
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
                shortDescription: 'Yoga is not just a practice; it’s a way of life.',
                description: 'Francesco brings a warm and inspiring energy to his yoga teaching, blending traditional ' +
                    'practices with modern techniques to support holistic wellbeing. With over 7 years of experience, ' +
                    'he is certified in Vinyasa and Restorative Yoga, focusing on breath control, mindful movement, and ' +
                    'stress relief. His classes are designed to help students cultivate strength, flexibility, and inner ' +
                    'calm, welcoming practitioners of all levels. Francesco believes that yoga is a powerful tool for ' +
                    'reconnecting mind, body, and spirit, and he strives to create a nurturing space where everyone ' +
                    'feels empowered on their personal journey.',
                cv: '2016 – Completed 200-Hour Vinyasa Yoga Teacher Training (Yoga Alliance Certified)\n' +
                    '\n' +
                    '2017–2019 – Yoga Instructor at Serenity Yoga Studio, Rome\n' +
                    '\n' +
                    '2018 – Completed Restorative Yoga Teacher Training (50 hours)\n' +
                    '\n' +
                    '2019 – Attended Workshop on Breathwork and Pranayama (30 hours)\n' +
                    '\n' +
                    '2020 – Started teaching online yoga classes focusing on stress relief and mindfulness\n' +
                    '\n' +
                    '2021 – Led “Yoga for Mental Wellness” Retreat, Amalfi Coast\n' +
                    '\n' +
                    '2022–Present – Freelance Yoga Instructor, teaching Vinyasa and Restorative Yoga',
                image: {
                    create: [{ url: '/images/francesco.png' }],
                },
            },
        }),
        prisma.teacher.upsert({
            where: { name: 'Elena' },
            update: {},
            create: {
                name: 'Elena',
                surname: 'Blu',
                shortDescription: 'Meditation is the doorway to self-discovery and healing.',
                description: 'Elena is a dedicated meditation teacher with over 8 years of experience guiding individuals' +
                    ' toward greater mental clarity and emotional balance. Trained in mindfulness-based stress reduction ' +
                    '(MBSR) and various traditional meditation techniques, she helps students cultivate presence, calm, ' +
                    'and resilience in everyday life. Her sessions blend breath awareness, body scanning, and loving-kindness ' +
                    'practices, tailored to beginners and advanced practitioners alike. Elena’s compassionate and patient ' +
                    'approach creates a safe space where everyone can explore their inner world and develop lasting peace.',
                cv: '2014 – Completed Mindfulness-Based Stress Reduction (MBSR) Teacher Training (200 hours)\n' +
                    '\n' +
                    '2015 – Certified Meditation Instructor (Vipassana tradition)\n' +
                    '\n' +
                    '2016–2019 – Meditation Teacher at Harmony Wellness Center, Milan\n' +
                    '\n' +
                    '2017 – Attended Advanced Mindfulness Retreat, Dharamsala, India\n' +
                    '\n' +
                    '2019 – Launched weekly group meditation sessions and corporate mindfulness workshops\n' +
                    '\n' +
                    '2020 – Completed Compassion Cultivation Training (CCT)\n' +
                    '\n' +
                    '2021–Present – Freelance Meditation Coach and Mindfulness Trainer (Milan & Online)\n' +
                    '\n' +
                    '2022 – Led “Mindful Living” Online Course Series',
                image: {
                    create: [{ url: '/images/elena.png' }],
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