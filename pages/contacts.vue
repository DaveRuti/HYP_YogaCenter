<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <button @click="goBack" class="back-button">
        <    Go back
      </button>
      <div class="error-container">
        <div class="content">

            <br><h1>Contacts of our team</h1>
            <h2>Even websites lose their balance sometimes.</h2>

        </div>
        <img src="/contact.png" alt="Contact Image" class="error-image"/>
      </div>
    </div>
    <div class="contact-row">
      <ContactComponent
          v-for="(contact, index) in contacts"
          :key="index"
          :title="contact.title"
          :imageUrl="contact.imageUrl"
      />
    </div>

    <h2>Dove siamo</h2>
    <div class="mappa-container">

      <div class="address">
        <p>Address: Piazza Leonardo da Vinci, 32, 20133 Milano MI</p>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.199970422994!2d9.227746426630475!3d45.47786138252662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x4fa6e0b212f7dd0c!2sPiazza%20Leonardo%20da%20Vinci%2C%2032%2C%2020133%20Milano%20MI!5e0!3m2!1sit!2sit!4v1747504026638!5m2!1sit!2sit"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

    <FAQ/>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>

import FAQ from "~/components/FAQ.vue";
import ContactComponent from "~/components/ContactComponent.vue";

const contacts = [
  { title: "Chat to support", imageUrl: "/icons/ChatSupport.png" },
  { title: "Visit us", imageUrl: "/icons/location.png" },
  { title: "Call us", imageUrl: "/icons/phone.png" }
];

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.main {
  text-align: center;
  padding: 100px 20px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.back-button {
  display: flex;
  justify-content: flex-start;
  background-color:  #F8F8F6;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 60px 30px;
  flex-wrap: wrap; /* permette layout a colonna su mobile */
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
}

.error-image {
  max-width: 400px;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}

.content {
  flex: 1;
  min-width: 280px;
  padding: 0 20px;
  box-sizing: border-box;
}

.contact-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

.contact-row > * {
  flex: 1; /* Ensures equal width for all components */
  min-width: 200px; /* Prevents components from shrinking too much */
}

h1 {
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 20px;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}
a {
  font-size: 1rem;
  color: #42b983;
  text-decoration: underline;
}

.mappa-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  font-family: sans-serif;
}

.address {
  flex: 1 1 300px;
}

.map {
  flex: 1 1 400px;
  min-height: 300px;
}

@media (max-width: 768px) {
  .error-container {
    flex-direction: column;
  }
}

</style>