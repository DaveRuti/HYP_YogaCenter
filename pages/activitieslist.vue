<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="main">

      <div class="content">
        <h1 class="title">Our Activities</h1>
        <p class="subtitle">Flow into peace and explore your wellness</p>
      </div>

      <!--<h1 class="page-title">Our Activities</h1>
      <p class="page-subtitle">
        Flow into peace and explore your wellness
      </p>-->

      <b class="activityTitle">Yoga</b>

      <div class="card-container">
        <ItemActivity id="yin Yoga"/>
        <ItemActivity id="power Yoga"/>
        <ItemActivity id="ashtanga Yoga"/>
        <ItemActivity id="vinyasa Yoga"/>
        <ItemActivity id="hata Yoga"/>
      </div>

      <b class="activityTitle">Meditation</b>

      <div class="card-container">
        <ItemActivity id="mindfulness Meditation"/>
        <ItemActivity id="zen Meditation"/>
      </div>

      <b class="activityTitle">Pilates</b>

      <div class="card-container">
        <ItemActivity id="pilates 1"/>
        <ItemActivity id="pilates 2"/>
        <ItemActivity id="pilates 3"/>
      </div>

      <b class="activityTitle">Seminars</b>

      <div class="card-container">
        <ItemActivity id="seminar"/>
        <ItemActivity id="workshop"/>
      </div>

    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import ItemActivity from '~/components/ItemActivity.vue';
import Navbar from "@/components/navbar.vue";

export default {
  name: "ActivitiesListPage",
  components: {Navbar, Item: ItemActivity },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&family=Roboto:wght@500&display=swap');
@import "assets/global.css";

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 404px);
  gap: 24px;

  justify-content: center; /* Questo centra tutta la griglia */
  margin-top: 140px;
  margin-bottom: 140px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assicura che la navbar sia sopra gli altri elementi */
}

/*.page-title {
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: #555;
  margin: 0;
}

.page-subtitle {
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: #555;
  margin: 0;
}*/

.content {
  padding-top: 100px;
  padding-bottom: 100px;
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

.title {
  font-size: 80px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 0px;
}

h1{
  margin-bottom: 20px;
}

.activityTitle {
  width: 714px;
  position: relative;
  font-size: 72px;
  letter-spacing: -0.03em;
  line-height: 80%;
  color: #000;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 220px;
  margin-top: 140px;
}

</style>