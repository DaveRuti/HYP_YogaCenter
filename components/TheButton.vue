<template>
  <button class="rounded-button" @click="$emit('click')">
    <slot>Click Me</slot>
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
};
</script>

<style scoped>
.rounded-button {
  background-color: #08663A;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 999px; /* Angoli completamente stondati */
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
}

.rounded-button:hover {
  background-color: #064F2D;
}
</style>
