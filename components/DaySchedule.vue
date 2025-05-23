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
  <div class="dayParent">
    <div class="day">
      <p class="p">{{ day }}:                 </p>
      <p class="p">   </p>
    </div>
    <div class="div">
      <p class="p1">{{ startTime }} - {{ endTime }}</p>
    </div>
  </div>
</template>
<style scoped>

.p {
  margin: 0;
  white-space: pre-wrap;
}
.day {
  width: 180px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 29px;
  flex-shrink: 0;
}
.p1 {
  margin: 0;
}
.div {
  width: 202px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 33px;
  flex-shrink: 0;
}
.dayParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 80px;
  margin-left: -20px;
}

@media (max-width: 800px) {
  .p {
    margin: 0;
    white-space: pre-wrap;
  }

  .day {
    width: 172px;
    position: relative;
    line-height: 14px;
    display: inline-block;
    height: 29px;
    flex-shrink: 0;
    margin: 0;
    left: -80px;
    white-space: pre-wrap;
    font-size: 20px;
  }

  .p1 {
    margin: 0;
  }

  .div {
    width: 202px;
    position: relative;
    line-height: 13px;
    display: inline-block;
    height: 33px;
    flex-shrink: 0;
    margin: 0;
    left: -110px;
    white-space: pre-wrap;
    font-size: 20px;
  }

  .dayParent {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
  }
}



</style>