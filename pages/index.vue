<template>
  <div class="page-container">
    <div class="navbar">
    <Navbar />
    </div>
    <div class="content">
      <div class="card-container">
        <Item id="yoga" />
        <Item id="meditation" />
        <Item id="meditation" />
      </div>
    </div>
    <li v-for="activity in activities" :key="activity.id">
      <h3>{{ activity.title }}</h3>
      <p>{{ activity.description }}</p>
    </li>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Importa composables Vue
import Navbar from "@/components/navbar.vue";
import Item from "@/components/Item.vue";
import Footer from "@/components/footer.vue";

// Dichiarazione di variabili reattive
const activities = ref([]);
const error = ref(null);

// Funzione asincrona per recuperare le attività
const fetchActivities = async () => {
  try {
    const { data, error: fetchError } = await useFetch('/api/activities');

    console.log('Attività:', activities.value)

    if (fetchError.value) {
      error.value = fetchError.value; // Memorizza l'errore in caso di fallimento
      return;
    }

    activities.value = data.value; // Salva i dati ricevuti dalla risposta
  } catch (err) {
    error.value = err.message; // Gestione degli errori
    console.error('Errore nel recupero delle attività:', err);
  }
};

// Recupero delle attività al montaggio del componente
onMounted(() => {
  fetchActivities(); // Recupera le attività al caricamento della pagina
});
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assicura che la navbar sia sopra gli altri elementi */
}

.footer {
  width: 100%;
}

.content {
  flex: 1; /* Spinge il footer in basso */
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 404px);
  gap: 24px;
  justify-content: center; /* Questo centra tutta la griglia */
  margin-bottom: 80px;
}

/* Forzare 2 su mobile, 3 su desktop */
@media (max-width: 640px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>