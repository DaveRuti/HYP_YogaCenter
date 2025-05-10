<template>
  <div class="page-container">
    <header>
      <div  class="navbar">
        <Navbar/>
      </div>
    </header>
    <body>
      <h1>Teachers</h1>
      <div class="teachers-list">
        <ItemTeacher
            v-for="teacher in teachers"
            :key="teacher.id"
            :title="`${teacher.name} ${teacher.surname}`"
            :imageUrl="teacher.image[0]?.url"
            :route="`/teacher/${teacher.id}`"
        />
      </div>
    </body>
    <footer>
      <div>
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemTeacher from '@/components/ItemTeacher.vue';
import Navbar from "~/components/navbar.vue";

const teachers = ref([]);

onMounted(async () => {
  const res = await fetch('/api/teachers');
  teachers.value = await res.json();
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
}

.navbar {
  /*position: fixed;*/
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assicura che la navbar sia sopra gli altri elementi */
}
.teachers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
</style>
