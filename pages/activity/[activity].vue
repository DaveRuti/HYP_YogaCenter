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
          :activity="activity.title"
          class="orientation-link"/>

        <h1 id="activity-title">{{ activity.title }}</h1>
        <img :src="activity.image?.[0]?.url" class="icon">
        <p class="activity-description">{{ activity.description }}</p>

        <div class="lessonScheduleContainer">
          <LessonsSchedule id="lessonScheduleTab" :activity="activity.timeSchedule"/>
        </div>


        <h1>Teachers</h1>

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

      <h1>Lessons</h1>

        <ActivityLesson class="activity-lessons"/>

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



.teachers-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr); /* 3 per riga di default */
  justify-content: center;     /* Centra la griglia orizzontalmente */
  align-items: start;
  max-width: 1250px;            /* Limita la larghezza totale della griglia */
  margin: 0 auto;
  min-width: 450px;
}

.icon {
  /*width: 50%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 885px;
  object-fit: cover;
  height: 1205px;*/
  height: 100%;
  max-width: 1000px;
  max-height: 1085px;
  min-width: 405px;
  min-height: 300px;
  margin-bottom: 100px;
  width: 100%;
  /*aspect-ratio: 404 / 505;*/
  padding-left: 100px;
  padding-right: 100px;
}

#activity-title{
  margin-top: -100px;
  margin-bottom:  140px;
}

.activity-description{
  margin-bottom: 150px;

  width: 100%;
  position: relative;
  font-size: 25px;
  line-height: 41px;
  font-weight: 300;
  font-family: 'Nunito Sans';
  color: #000;
  text-align: justify;
  display: inline-block;
  height: 188px;
  padding-right: 250px;
  padding-left: 250px;
}

#lessonScheduleTab{
  align-content: center;
  left: 10%;
  right: 10%;
  margin-bottom: 150px;
}

.activity-lessons{
  margin-top: 50px;
  left: 15%;
  right: 10%;
  margin-bottom: 150px;
}

h1{
  margin-bottom:  150px;
}

.orientation-link{
  /*width: 100%;*/
}

.lessonScheduleContainer{
  padding-right: 200px;
}

@media (max-width: 1600px) {
  .activity-description{
    margin-bottom: 350px;
  }
}

@media (max-width: 1200px) {
  .activity-lessons{
    padding-right: 100px;
  }
  .activity-description{
    padding-right: 150px;
    padding-left: 150px;
    margin-bottom: 250px;
  }
}

@media (max-width: 1100px) {
  .activity-lessons{
    padding-right: 250px;
  }
  .activity-description{
    padding-right: 80px;
    padding-left: 80px;
    margin-bottom: 450px;
  }
}

@media (max-width: 700px) {
  .activity-lessons{
    padding-right: 150px;
  }
  .activity-description{
    font-size: 17px;
    margin-bottom: 450px;
  }
  #activity-title{
    margin-top: -150px;
  }
  .lessonScheduleContainer{
    padding-right: 80px;
  }
}

@media (max-width: 550px) {
  .activity-description{
    margin-bottom: 550px;
  }
  #lessonScheduleTab{
    left: 5%;
  }
  .lessonScheduleContainer{
    padding-right: 40px;
  }
}

@media (max-width: 450px) {
  .activity-lessons{
    padding-right: 90px;
  }
  .activity-description{
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 640px;
  }
  .icon{
    padding-left: 40px;
  }
  .lessonScheduleContainer{
    padding-right: 20px;
  }
}



</style>