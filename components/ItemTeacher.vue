<template>
  <div class="yoga-card" @click="handleClick">
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
    imageUrl: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/300x200?text=No+Image'
    },
    route: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick() {
      if (this.route) {
        this.$router.push(this.route);
      }
    }
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  * {
    font-family: 'Nunito', sans-serif;
  }

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
