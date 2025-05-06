<template>
  <div class="yoga-card" @click="goToActivityPage">
    <div class="background-layer"></div>
    <div class="overlay">
      <span class="label">{{ titolo }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: String,
  },
  computed: {
    titolo() {
      return this.id.charAt(0).toUpperCase() + this.id.slice(1);
    }
  },
  methods: {
    goToActivityPage() {
      this.$router.push(`/activity`);
    }
  }
};
</script>

<style scoped>
.yoga-card {
  width: 100%;
  aspect-ratio: 404 / 505;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.background-layer {
  position: absolute;
  inset: 0;
  background-image: url('../assets/yoga.png');
  background-size: cover;
  background-position: center;
  transition: filter 0.3s ease;
  z-index: 0;
}

.yoga-card:hover .background-layer {
  filter: brightness(0.75);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%);
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