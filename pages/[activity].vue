<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="content">

        <OrientationLink
          :text="'Activities'"
          :route="'activitieslist'"
          :activity="activity.title"/>

        <h1>{{ activity.title }}</h1>
        <img :src="activity.image?.[0]?.url">
        <p>{{ activity.description }}</p>

        <LessonsSchedule />

        <b>Teachers</b>

        <div class="teachers-list">
          <ItemTeacher
              v-for="teacher in teachers"
              :id="teacher.id"
              :title="`${teacher.name} ${teacher.surname}`"
              :imageUrl="teacher.image[0]?.url"
              :route="`/teacher/${teacher.id}`"
          />
        </div>

      </div>

      <b>Lessons</b>

        <ActivityLesson />

    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemActivity from "~/components/ItemActivity.vue";
import LessonSchedule from "~/components/LessonsSchedule.vue";
import ItemTeacher from "~/components/ItemTeacher.vue";
import ActivityLesson from "~/components/ActivityLesson.vue";

const activity = ref({});
const teachers = ref([]);

const route = useRoute();
const id = route.params.activity;

console.log(id + "\n\n --------------- \n\n");
console.log(route.params.activity + "\n\n --------------- \n\n");
console.log(route.name);


onMounted(async () => {
  const res = await fetch('/api/teachers');
  teachers.value = await res.json();
  const res2 = await fetch(`/api/activity/${id}`);
  activity.value = await res2.json();
  console.log(activity.value.title);
  })

</script>

<style scoped>
@import "../assets/global.css" ;

.teachers-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr); /* 3 per riga di default */
  justify-content: center;     /* Centra la griglia orizzontalmente */
  align-items: start;
  max-width: 1250px;            /* Limita la larghezza totale della griglia */
  margin: 0 auto;
}

</style>