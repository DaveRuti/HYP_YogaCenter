<template>
  <div class="teachers-list">
    <ItemTeacher
        v-for="teacher in teachers"
        :key="teacher.id"
        :title="`${teacher.name} ${teacher.surname}`"
        :imageUrl="teacher.image[0]?.url"
        :route="`/teacher/${teacher.id}`"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemTeacher from '@/components/ItemTeacher.vue';

const teachers = ref([]);

onMounted(async () => {
  const res = await fetch('/api/teachers');
  teachers.value = await res.json();
});
</script>

<style scoped>
.teachers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
</style>
