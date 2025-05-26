<template>

  <div class="orientation-container">
    <NuxtLink :to="'/' + route">
      <div class="text-link">{{ text }} &gt;</div>
    </NuxtLink>

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

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.text-link {
  padding: 0;
  position: relative;
  font-size: 28px;
  text-decoration: underline;
  line-height: 41px;
  font-weight: 300;
  color: #000;
  text-align: justify;
  display: inline-block;
  cursor: pointer;
}

.orientation-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}


</style>