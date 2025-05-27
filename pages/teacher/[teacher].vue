<template>

  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="main">

      <div class="content">

        <div class="orientation-link">
          <OrientationLink
              :text="'Teachers'"
              :route="'teacherslist'"
              :activity="teacher.title || ''"
          />
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
              <ItemActivity
                  v-for="activity in teacherActivities"
                  :key="activity.id"
                  :id="activity.id"
                  :title="activity.title"
                  :imageUrl="activity.image[0]?.url"
                  :route="`/activity/${activity.id}`"
              />
            </div>
          </section>

          <section class="cv">
            <h2>CV</h2>
            <p v-html="teacher?.cv"></p>
          </section>

        </div>
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ItemActivity from "~/components/ItemActivity.vue";

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

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
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

  .intro-text, .cv p {
    max-width: 100%;
  }
}
</style>
