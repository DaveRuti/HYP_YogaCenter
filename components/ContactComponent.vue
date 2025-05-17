<template>
  <div class="square">
    <slot>
      <img :src="imageUrl" alt="Image" class="icon" />
      <p>{{ title }}</p>
    </slot>
  </div>
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
  }
});
</script>

<style scoped>
.square {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f6;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.square:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
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
}
</style>