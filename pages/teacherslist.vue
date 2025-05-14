<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="content">
        <h1>Our Teachers</h1>
        <p>They are the ones who will look after your passion</p>
      </div>
      <div class="teachers-list">
        <ItemTeacher
            v-for="teacher in teachers"
            :key="teacher.id"
            :title="`${teacher.name} ${teacher.surname}`"
            :imageUrl="teacher.image[0]?.url"
            :route="`/teacher/${teacher.id}`"
        />
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
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

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: 'Nunito Sans', sans-serif;
}

h1{
  font-size: 5rem;
  margin-bottom: 20px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.footer {
  padding-top: 100px;
  margin: 0;
  width: 100%;
}
.teachers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
</style>
