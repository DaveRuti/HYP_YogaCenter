<template>
  <div class="card" @click="goToActivityPage">
    <div class="card__image"></div>
    <div class="card__body">
      <h2 class="card__title">Yin Yoga</h2>
      <p class="card__text">
        Perfect for beginners and expert practitioners, our session help you cultivate mindfulness, reduce stresss....
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    goToActivityPage() {
      //this.$router.push({name: 'activity', params:{activity: this.id}});
      this.$router.push({ name: 'activity-activity', params: { activity: this.id } });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card {
  display: flex;
  flex-direction: column;
  width: 389px;
  height: 484px;
  border-radius: 40px;
  overflow: hidden;
  background: #fff;
}

.card__image {
  width: 100%;
  height: 291.1px;
  background: lightgray none /*url("path/to/image.jpg")*/ 50% / cover no-repeat;
  transform: rotate(-0.182deg);
  flex-shrink: 0;
}

.card__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 193px;
  background: #F8F8F6;
  padding: 0 20px;
  gap: 10px;
}

.card__title {
  color: #000;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 27px;
}

.card__text {
  color: #000;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  max-width: 319px;
}
</style>
