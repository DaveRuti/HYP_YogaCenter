<template>
  <router-link :to="to" class="square" @click="$emit('clicked')">
    <img :src="imageUrl" alt="Image" class="icon" />
    <p>{{ title }}</p>
  </router-link>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/300x200?text=No+Image'
  },
  to: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.square {
  width: 150px;
  height: 150px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
}

.square:hover {
  transform: translateY(-5px);
  background-color: #eee;
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
</style>