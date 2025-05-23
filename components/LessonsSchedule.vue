
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
@import "../assets/global.css";

.lessonsSchedule {
  position: absolute;
  top: 45px;
  left: 96px;
  line-height: 114px;
  display: inline-block;
  width: 857px;
  font-size: 80px;
}

.frameParent {
  position: relative;
  top: 49px;
  left: 164px;
  width: 1114px;
  //width: 100%;
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
  width: auto;
  position: relative;
  border-radius: 88px;
  background-color: rgba(8, 102, 58, 0.24);
  height: 598px;
  text-align: left;
  //font-size: 80px;
  color: #000;
  font-family: 'Nunito Sans';
  max-width: 1500px;
  margin-top: 100px;

}

@media (max-width: 1800px) {
  .frameParent{
    left: 94px;
  }
}

@media (max-width: 1700px){
  .lessonsSchedule{
    font-size: 52px;
  }
  .frameParent{
    font-size: 28px;
    gap: 43px 120px;
  }
}

@media (max-width: 1500px) {
  .frameParent{
    gap: 43px 80px;
    max-width: 100px;
  }
}

@media (max-width: 1200px){
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
    top: 80px;
  }
}

@media (max-width: 1000px) {
  .frameParent{
    left: 80px;
  }
}

@media (max-width: 800px) {


  .lessonsSchedule {
    width: 252px;
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

  /*.frameParent {
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
  }*/

}

</style>
