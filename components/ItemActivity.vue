<template>
  <div class="yoga-card" @click="goToActivityPage">
    <div class="background-layer" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
    <div class="overlay">
      <span class="label">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/300x200?text=No+Image'
    }
  },
  methods: {
    goToActivityPage() {
      //this.$router.push(`/api/activity/${this.id}`);
      this.$router.push(`/activity`);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  font-family: 'Nunito Sans', sans-serif;
}

.yoga-card {
  width: 100%;
  aspect-ratio: 404 / 505;
  border-radius: 12px;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  max-width: 500px;
}

.background-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease, filter 0.3s ease;
  z-index: 0;
}

.yoga-card:hover .background-layer {
  transform: scale(1.05);
  filter: brightness(0.75);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 100%);
  display: flex;
  align-items: flex-end;
  padding: 5%;
  z-index: 1;
}

.label {
  color: white;
  font-size: clamp(1rem, 4vw, 2rem); /* testo responsive */
  font-weight: bold;
}
</style>