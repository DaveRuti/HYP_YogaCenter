<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="content">

          <div class="orientation-link">
            <OrientationLink
              :text="'Activities'"
              :route="'activitieslist'"
              :activity="activity.title"/>
          </div>

        <h1 class="title" id="activity-title">{{ activity.title }}</h1>

        <div class="image-description">
          <img :src="activity.image?.[0]?.url" class="activity-img" alt="Activity Image"/>
          <p class="activity-description">{{ activity.description }}</p>
        </div>

        <div class="lessonScheduleContainer">
          <LessonsSchedule v-if="activity && activity.timeSchedule" :timeSchedule="activity.timeSchedule" />
        </div>

        <div class="teachers-container">
          <h1 class="teachers-title">Teachers</h1>
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

        <!--<h2>Lessons</h2>

        <ActivityLesson class="activity-lessons"/>-->
      </div>

    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
//import ItemActivity from "~/components/ItemActivity.vue";
import LessonSchedule from "~/components/LessonsSchedule.vue";
import ItemTeacher from "~/components/ItemTeacher.vue";
import ActivityLesson from "~/components/ActivityLesson.vue";

const activity = ref({});
const teachers = ref([]);

const route = useRoute();
const id = route.params.activity;


onMounted(async () => {
  const res = await fetch(`/api/activity-teachers/${id}`);
  teachers.value = await res.json();
  const res2 = await fetch(`/api/activity/${id}`);
  activity.value = await res2.json();
  console.log(activity.value);
  })

</script>

<style scoped>
@import "../../assets/css/global.css";
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.main{
  text-align: center;
  padding: 0 20px 50px;
}

.content{
  padding-bottom: 0;
}

.orientation-link{
  padding: 20px;
}

.title{
  font-size: clamp(3rem, 9vw, 5rem);
  margin-bottom: 20px;
}

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

.lessonScheduleContainer{
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}

/*.activity-lessons{
  align-content: center;
  margin-top: 50px;
  margin-bottom: 150px;
}*/

.teachers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 100%;
}

.teachers-title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 50px;
  text-align: left;
  width: 100%;
  margin-left: 200px;
}

.teachers-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr); /* 3 per riga di default */
  justify-content: center;     /* Centra la griglia orizzontalmente */
  align-items: start;
  max-width: 1250px;            /* Limita la larghezza totale della griglia */
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 1000px) {
  .teachers-list {
    grid-template-columns: repeat(2, 1fr); /* 2 per riga su schermi piccoli */
    max-width: 820px;
  }

  .teachers-title {
    margin-left: 0; /* Centra il titolo su schermi piccoli */
    text-align: center; /* Centra il testo */
  }
}

</style>