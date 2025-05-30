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

          <section class="image-description">
            <img :src="teacher.image?.[0]?.url" class="activity-img" alt="Activity Image"/>
            <p class="activity-description">{{ teacher.description }}</p>
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

const pageTitle = computed(teacher.value.name + " " + teacher.value.surname);

useSeoMeta({
  title: pageTitle
})
</script>

<style scoped>

.image-description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  column-gap: 80px;
  padding: 50px;
  flex-wrap: wrap; /* Permette il wrap */
}

.activity-description {
  max-width: 500px;
  width: 100%; /* Occupa tutta la riga quando va sotto */
  font-size: 20px;
  height: auto;
  line-height: 40px;
  font-weight: 300;
  text-align: justify;
  display: inline-block;
  margin-top: 20px; /* Spazio sopra quando va sotto */
}

.activity-img {
  max-width: 400px;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

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
