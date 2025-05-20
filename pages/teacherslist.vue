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
            :id="teacher.id"
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

* {
  font-family: 'Nunito Sans', sans-serif;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  padding-top: 100px;
  padding-bottom: 100px;
}

h1{
  font-size: clamp(3rem, 7vw, 5rem);
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
  gap: 20px;
  grid-template-columns: repeat(3, 1fr); /* 3 per riga di default */
  justify-content: center;     /* Centra la griglia orizzontalmente */
  align-items: start;
  max-width: 1250px;            /* Limita la larghezza totale della griglia */
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .teachers-list {
    grid-template-columns: repeat(2, 1fr); /* 2 per riga su schermi piccoli */
    max-width: 820px;
  }
}
</style>
