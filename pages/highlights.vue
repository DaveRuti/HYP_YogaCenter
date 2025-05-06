<template>
  <div class="page-container">

    <div class="navbar">
      <Navbar />
    </div>


    <div class="content">
      <div class="highlights">

        <h1 class="page-title">Highlights</h1>
        <p class="page-subtitle">
          Taste our newest activities designed for your yoga needs
        </p>


        <div class="components-container">
          <HighlightsComponent
              v-for="(n, idx) in 4"
              :key="idx"
              :class="{ reversed: idx % 2 === 1 }"
          />
        </div>
      </div>
    </div>


    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import HighlightsComponent from "@/components/HighlightsComponent.vue";
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&family=Roboto:wght@500&display=swap');


.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}


.content {
  flex: 1;
  padding-top: 80px;
}

.footer {
  width: 100%;
  margin-top: auto;
}


body {
  background-color: #fff;
  margin: 0;
}
 /* ??? */
.highlights {
  padding: 60px 0;
  width: 100%;
  max-width: 1728px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.page-title {
  font-family: "Nunito Sans", sans-serif;
  font-size: 100px;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.page-subtitle {
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: #555;
  margin: 0;
}


.components-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 0 auto;
}


.components-container > .reversed .inner {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {

  .components-container > .reversed .inner {
    flex-direction: column !important;
  }

  .components-container > .inner {
    flex-direction: column;
  }
}
</style>
