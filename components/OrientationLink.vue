<template>

  <div class="orientation-container">
    <NuxtLink :to="'/' + route">
      <div class="activities">{{ text }} &gt;</div>
    </NuxtLink>
    <div class="activity">{{ activity }}</div>
  </div>
</template>

<script>

export default {
  name: 'OrientationLink',
  props: {
    text: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true,
      default: 'error'
    },
    activity: {
      type: String,
      required: true
    }
  },
  methods: {
    onTextClick() {
      let route = route;
      this.$router.push('/' + route);
    }
  }
};

</script>

<style  scoped>

.activities {
  width: 570px;
  position: relative;
  font-size: 28px;
  text-decoration: underline;
  line-height: 41px;
  font-weight: 300;
  font-family: 'Nunito Sans';
  color: #000;
  text-align: justify;
  display: inline-block;
  height: 43px;
  cursor: pointer;
  left: 0px;
  top: -108px;
}

.activity {
  width: 473px;
  position: relative;
  font-size: 28px;
  text-decoration: underline;
  line-height: 41px;
  font-weight: 300;
  font-family: 'Nunito Sans';
  color: #000;
  text-align: justify;
  display: inline-block;
  height: 43px;
  cursor: pointer;
  left: 211px;
  top: -248px;
}

.orientation-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

@media (max-width: 700px) {
  .activities {
    //width: 90%;
    //font-size: 18px;
    left: -40px;
    font-size: 20px;
    //top: 0;
    //position: relative;
  }

  .activity {
    font-size: 20px;
    left: 130px;
  }
}

</style>