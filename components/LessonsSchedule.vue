
<\script>

<template>
  <div class="lessonsScheduleParent">
    <b class="lessonsSchedule">Lessons Schedule</b>
    <div class="frameParent">
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Monday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Thursday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Tuesday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Friday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Wednesday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
      <div class="mondayParent">
        <div class="monday">
          <p class="p">Saturday:                 </p>
          <p class="p">   </p>
        </div>
        <div class="div">
          <p class="p1">13:00 - 16:00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>.lessonsSchedule {
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 43px 190px;
  text-align: justify;
  font-size: 32px;
}
.lessonsScheduleParent {
  width: 100%;
  position: relative;
  border-radius: 88px;
  background-color: rgba(8, 102, 58, 0.24);
  height: 498px;
  text-align: left;
  font-size: 80px;
  color: #000;
  font-family: 'Nunito Sans';
}

</style>
