
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
import { toRef } from 'vue'

const props = defineProps({
  timeSchedule: Object,  // or use Ref type if using TS
})

console.log(props.timeSchedule + "-------------");

</script>

<template>
  <div class="lessonsScheduleParent">
    <b class="lessonsSchedule">Lessons Schedule</b>
    <div class="frameParent">

      <!--<div class="mondayParent">
        <div class="monday">
          <p class="p">Monday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>

      <DaySchedule :v-for="daySchedule in activity.timeSchedule"
                   :day="daySchedule.day"
                   :start-time="daySchedule.startTime"
                   :end-time="daySchedule.endTime"
      />-->

      <DaySchedule
          :day="'Monday'"
          :start-time="'13:00'"
          :end-time="'16:00'"
      />

      <DaySchedule
          :day="'Tuesday'"
          :start-time="'10:00'"
          :end-time="'12:00'"
      />

      <DaySchedule
          :day="'Wednesday'"
          :start-time="'14:00'"
          :end-time="'16:00'"
      />

      <DaySchedule
          :day="'Thursday'"
          :start-time="'15:00'"
          :end-time="'17:00'"
      />

      <DaySchedule
          :day="'Friday'"
          :start-time="'10:00'"
          :end-time="'11:00'"
      />

    </div>
  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

.lessonsSchedule {
  position: absolute;
  top: 45px;
  left: 96px;
  line-height: 114px;
  display: inline-block;
  width: 857px;
}
.p {
  margin: 0;
  white-space: pre-wrap;
}
.monday {
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
.mondayParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 80px;
}
.frameParent {
  position: absolute;
  top: 219px;
  left: 164px;
  width: 1114px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 43px 190px;
  text-align: justify;
  font-size: 32px;
  height: 278px;
}
.lessonsScheduleParent {
  width: 100%;
  position: relative;
  border-radius: 88px;
  background-color: rgba(8, 102, 58, 0.24);
  height: 598px;
  text-align: left;
  font-size: 80px;
  color: #000;
  font-family: 'Nunito Sans';
  max-width: 1500px;
}

@media (max-width: 800px) {


  .lessonsSchedule {
    width: 202px;
    position: absolute;
    left: 140px;
    font-size: 27px;
    line-height: 14px;
    display: inline-block;
    font-family: 'Nunito Sans';
    color: #000;
    text-align: right;
    height: 18.8px;
    transform-origin: 0 0;
  }

  /*.p {
    margin: 0;
    white-space: pre-wrap;
  }

  .monday {
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

  .mondayParent {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
  }*/

  .frameParent {
    width: 500px;
    position: absolute;
    height: 600px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 100px 28px 126px;
    box-sizing: border-box;
    gap: 27px;
    transform-origin: 0 0;
    text-align: justify;
    font-size: 20px;
    color: #000;
    font-family: 'Nunito Sans';
    left: 120px;
    top: 20px;
  }

}

</style>
