<template>
  <div>
    <div v-for="teacher in teachers" :key="teacher.id">
      <img :src="teacher.image[0]?.url" alt="Foto insegnante"/>
      <h2>{{ teacher.name }} {{ teacher.surname }}</h2>
    </div>
  </div>
</template>

<script setup>
const { data: teachers } = await useFetch('/api/teachers');
</script>
