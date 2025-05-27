<template>
  <div class="orientation-container">
    <NuxtLink :to="`/${route}`" :aria-label="`Navigate to ${text}`">
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
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.text-link {
  font-size: 28px;
  text-decoration: underline;
  line-height: 41px;
  font-weight: 300;
  color: #000;
  text-align: justify;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;
}

.text-link:hover {
  color: #08663A; /* Add a hover effect */
}

.orientation-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
</style>