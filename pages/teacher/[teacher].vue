<template>
  <div class="navbar">
    <Navbar />
  </div>

  <div class="container">
    <header>
      <h1>{{ teacher?.name }} {{ teacher?.surname }}</h1>
    </header>

    <div class="main-image-wrapper">
      <img
          :src="teacher?.image?.[0]?.url"
          :alt="`${teacher?.name} ${teacher?.surname}`"
      />
    </div>

    <section class="intro">
      <h2>Description</h2>
      <div class="intro-text">
        <p v-html="teacher?.description"></p>
      </div>
    </section>

    <section class="activities">
      <h2>Activities</h2>
      <div class="activities-grid">
        <div
            v-for="activity in teacherActivities"
            :key="activity.id"
            class="activity-item"
        >
          <NuxtLink :to="`/activity/${activity.id}`">
            <item-activity
                :src="activity.image?.[0]?.url"
                :alt="activity.title"
            />
            <span class="activity-title">{{ activity.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="cv">
      <h2>CV</h2>
      <p v-html="teacher?.cv"></p>
    </section>

    <section class="gallery">
      <div
          v-for="(img, idx) in teacher?.image?.slice(1)"
          :key="idx"
          class="gallery-item"
      >
        <img
            :src="img.url"
            :alt="`${teacher?.name} ${teacher?.surname} - image ${idx + 2}`"
        />
      </div>
    </section>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const teacher = ref({})
const teacherActivities = ref([])

const route = useRoute()
const id = route.params.teacher

onMounted(async () => {
  // fetch teacher data
  const res1 = await fetch(`/api/teacher/${id}`)
  teacher.value = await res1.json()

  // fetch activities for this teacher
  const res2 = await fetch(`/api/teacher-activities/${id}`)
  teacherActivities.value = await res2.json()
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.footer {
  padding-top: 100px;
  margin: 0;
  width: 100%;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 120px;
}

header h1 {
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
}

.main-image-wrapper img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
  margin-bottom: 2rem;
}

.intro h2 {
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.intro-text {
  max-width: 1000px;
  margin: 0 auto 2rem auto;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}

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

.cv {
  margin: 2rem auto;
  max-width: 1200px;
  text-align: center;
}

.cv h2 {
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  width: 100%;
}

.cv p {
  margin: 0 auto;
  text-align: justify;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
}

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

@media (max-width: 992px) {
  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cv p {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .activities-grid {
    grid-template-columns: 1fr;
  }
  .gallery {
    grid-template-columns: 1fr;
  }
  .intro-text, .cv p {
    max-width: 100%;
  }
}
</style>
