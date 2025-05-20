<template>
  <!--<div class="activities" @click="onTextClick">{{ text }} &gt;</div>
  <div class="activities" style="left: 270px"> {{ '/' + route }} </div
  <router-link to="{ '/' + route }"><div class="activities" style="left: 270px">{{ text }} &gt;</div></router-link>>-->

  <NuxtLink :to="'/' + route">
    <div class="activities">{{ text }} &gt;</div>
  </NuxtLink>
  <div class="activity">{{ activity }} </div>
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
  position: absolute;
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
  left: -150px;
  top: -28px;
}

.activity {
  width: 273px;
  position: absolute;
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
}



</style>