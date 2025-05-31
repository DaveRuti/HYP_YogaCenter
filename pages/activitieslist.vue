<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="content">
        <h1>Our Activities</h1>
        <p>Flow into peace and explore your wellness</p>
      </div>
      <div class="activities-list">

        <ItemActivity
            v-for="activity in activities"
            :id="activity.id"
            :key="activity.id"
            :title="activity.title"
            :imageUrl="activity.image?.[0]?.url"/>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemActivity from '@/components/ItemActivity.vue';

const activities = ref([]);

onMounted(async () => {
  try {
    // fetch activities
    const res = await fetch('/api/activities');
    const data = await res.json();

    if (data && !data.error) {
      activities.value = data
      console.log('Activities loaded:', data)
    } else {
      console.error('Error fetching Activities:', data.error)
    }
  } catch (error) {
    console.error('Failed to fetch Activities:', error)
  }
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

.activities-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr); /* 3 per riga di default */
  justify-content: center;     /* Centra la griglia orizzontalmente */
  align-items: start;
  max-width: 1250px;            /* Limita la larghezza totale della griglia */
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .activities-list {
    grid-template-columns: repeat(2, 1fr); /* 2 per riga su schermi piccoli */
    max-width: 820px;
  }
}
</style>
