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
  { title: "Chat to support", imageUrl: "contact.png" },
  { title: "Visit us", imageUrl: "location.png" },
  { title: "Call us", imageUrl: "contact.png" }
];

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
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

@media (max-width: 768px) {
  .error-container {
    flex-direction: column;
  }
}

</style>