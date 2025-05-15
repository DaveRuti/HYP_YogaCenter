<template>

  <div class="navbar">
    <Navbar />
  </div>

  <h1 class="page-title">Our Activities</h1>
  <p class="page-subtitle">
    Flow into peace and explore your wellness
  </p>

  <div class="card-container">
    <Item id="yin Yoga"/>
    <Item id="power Yoga"/>
    <Item id="ashtanga Yoga"/>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';
import Navbar from "@/components/navbar.vue";

export default {
  name: "ActivitiesListPage",
  components: {Navbar, Item: Item },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&family=Roboto:wght@500&display=swap');

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 404px);
  gap: 24px;

  justify-content: center; /* Questo centra tutta la griglia */
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assicura che la navbar sia sopra gli altri elementi */
}

.page-subtitle {
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: #555;
  margin: 0;
}

</style>