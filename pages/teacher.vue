<template>
  <div class="container">
    <!-- TITOLO PRINCIPALE -->
    <header>
      <h1>{{ teacher?.name }} {{ teacher?.surname }}</h1>
    </header>

    <!-- IMMAGINE PRINCIPALE -->
    <div class="main-image-wrapper">
      <img v-if="teacher?.image && teacher.image.length > 0"
           :src="teacher.image[0].url"
           :alt="`${teacher.name} ${teacher.surname}`" />
      <img v-else src="https://via.placeholder.com/1200x800.png?text=No+Image"
           alt="No image available" />
    </div>

    <!-- SEZIONE INTRO TESTUALE -->
    <section class="intro">
      <h2>Description</h2>
      <div class="intro-text">
        <p v-html="teacher?.description"></p>
      </div>
    </section>

    <!-- SEZIONE ACTIVITIES -->
    <section class="activities">
      <h2>Activities</h2>
      <div class="activities-grid">
        <div
            v-for="(act, idx) in activities"
            :key="idx"
            class="activity-item"
        >
          <img :src="act.image" :alt="act.title" />
          <span class="activity-title">{{ act.title }}</span>
        </div>
      </div>
    </section>

    <!-- SEZIONE CURRICULUM -->
    <section class="cv">
      <h2>CV</h2>
      <p v-html="teacher?.cv"></p>
    </section>

    <!-- GALLERIA FINALE -->
    <section class="gallery" v-if="teacher?.image && teacher.image.length > 1">
      <div
          v-for="(img, idx) in teacher.image.slice(1)"
          :key="idx"
          class="gallery-item"
      >
        <img :src="img.url" :alt="`${teacher.name} ${teacher.surname} - image ${idx+2}`" />
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, useRoute, useHead } from 'vue'

export default {
  name: 'TeacherProfilePage',
  setup() {
    const route = useRoute()
    const teacher = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const activities = ref([
      { image: 'https://via.placeholder.com/300x200.png?text=Yin+Yoga', title: 'Yin Yoga' },
      { image: 'https://via.placeholder.com/300x200.png?text=Ashtanga+Yoga', title: 'Ashtanga Yoga' },
      { image: 'https://via.placeholder.com/300x200.png?text=Power+Yoga', title: 'Power Yoga' },
    ])

    const fetchTeacher = async () => {
      try {
        const id = route.params.id
        loading.value = true
        const response = await fetch(`/api/teacher/${id}`)
        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        teacher.value = data
      } catch (e) {
        error.value = e.message || 'Failed to load teacher data'
        console.error('Error fetching teacher:', e)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchTeacher()
    })

    // SEO handling
    useHead(() => ({
      title: teacher.value ? `${teacher.value.name} ${teacher.value.surname}` : 'Teacher Profile',
      meta: [
        {
          name: 'description',
          content: teacher.value?.shortDescription || 'Teacher profile page'
        }
      ]
    }))

    return {
      teacher,
      loading,
      error,
      activities
    }
  }
}
</script>

<style scoped>
/* contenitore centrale */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* titolo in alto */
header h1 {
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
}

/* immagine principale con aspect‐ratio 3/2 */
.main-image-wrapper img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
  margin-bottom: 2rem;
}

/* SEZIONE INTRO */
.intro h2 {
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
.intro-text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  text-align: justify;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: 2rem;
}

/* SEZIONE ACTIVITIES */
.activities h2 {
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
.activities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.activity-item {
  position: relative;
  overflow: hidden;
}
.activity-item img {
  width: 100%;
  display: block;
}
.activity-title {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}

/* SEZIONE CV */
.cv {
  margin: 2rem 0;
}
.cv h2 {
  color: #000;
  text-align: left;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
.cv p {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}

/* GALLERIA FINALE */
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.gallery-item img {
  width: 100%;
  display: block;
}

/* --- BREAKPOINT MEDIO: 3 → 2 colonne in Activities --- */
@media (max-width: 992px) {
  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* --- UNICA MEDIA QUERY MOBILE --- */
@media (max-width: 480px) {
  .intro-text {
    grid-template-columns: 1fr;
  }
  .activities-grid {
    grid-template-columns: 1fr;
  }
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>