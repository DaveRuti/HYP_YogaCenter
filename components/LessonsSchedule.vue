
<script setup>
const props = defineProps({
  timeSchedule: Array,
})

// Destructures the prop to use it directly in the template
const { timeSchedule } = props

</script>

<template>
  <div class="lessonsScheduleParent">
    <div class="frameParent">
      <h1 class="title">Lessons Schedule</h1>
      <div v-if="timeSchedule && timeSchedule.length > 0">

        <DaySchedule v-for="(daySchedule, index) in timeSchedule"
                     :day = "daySchedule.day"
                     :start-time = "daySchedule.startTime"
                     :end-time = "daySchedule.endTime"
                     :key = "index"
          ></DaySchedule>

      </div>
      <div v-else>
        No lessons scheduled.
      </div>
    </div>
  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');
@import "../assets/css/global.css";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.lessonsScheduleParent {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  border-radius: 25px;
  background-color: rgba(8, 102, 58, 0.24);
  text-align: left;
  max-width: 1100px;
  width: 100%;
}

.title {
  text-align: left;
  padding: 10px 20px;
  font-size: clamp(40px, 6vw, 60px);
}

.frameParent {
  position: relative;
  flex-wrap: wrap;
  gap: 40px;
  text-align: left;
  font-size: 32px;
}

</style>
