
<!--<script>

export default {
  name: 'DaySchedule',
  props: {
    activity: {
      type: ref({}),
      required: true
    }
  }
};

//console.log(this.activity);

</script>-->

<script setup>
const props = defineProps({
  timeSchedule: Array,
})

// Destruttura la prop per usarla direttamente nel template
const { timeSchedule } = props

console.log('timeSchedule:', timeSchedule)
</script>

<template>
  <div class="lessonsScheduleParent">
    <div class="frameParent">
      <h1 class="title">Lessons Schedule</h1>
      <div v-if="timeSchedule && timeSchedule.length > 0">
        <div v-for="(daySchedule, index) in timeSchedule" :key="index" class="daySchedule">
          <div class="day">{{ daySchedule.day }}:</div>
          <div class="time">{{ new Date(daySchedule.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} - {{ new Date(daySchedule.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
          </div>
        </div>
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

.daySchedule {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  font-size: clamp(5px, 4vw, 30px);
}

.day {
  font-weight: 700;
  color: #000;
  width: 300px;
}

@media (max-width: 600px) {
  .day{
    width: 200px;
  }
}

</style>
