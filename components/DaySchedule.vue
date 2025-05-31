<script>

export default {
  name: 'DaySchedule',
  props: {
    day: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    }
  }
};

</script>
<template>
  <div class="daySchedule">
    <div class="day">{{ day }}:</div>
    <div class="time">{{ new Date(startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} - {{ new Date(endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
    </div>
  </div>
</template>
<style scoped>

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