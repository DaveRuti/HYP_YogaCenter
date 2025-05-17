<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="content">
        <h1>{{ title }}</h1>
        <img :src="{ imageUrl }">
        <p>{{ description }}</p>

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

<script>
import { ref, onMounted } from 'vue';
import ItemActivity from "~/components/ItemActivity.vue";
import LessonSchedule from "~/components/LessonsSchedule.vue";
import ItemTeacher from "~/components/ItemTeacher.vue";
import ActivityLesson from "~/components/ActivityLesson.vue";

export default {
  name: 'ActivityPage',
  components: {ItemTeacher, ItemActivity, LessonSchedule, ActivityLesson},
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      default: 'https://via.placeholder.com/300x200?text=No+Image'
    },
    description: {
      type: String,
      required: true
    },
    teachers: {
      type: [],
      required: true
    }
  }
};

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