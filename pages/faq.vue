<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="title-container">
        <div class="content">

          <h1>FAQ</h1>
          <p>Frequently Asked Questions and Answers</p>

        </div>
        <img src="/faq.png" alt="Contact Image" class="page-image"/>
      </div>
        <FAQ/>
      <div class="contact-row">
        <ContactComponent
            v-for="(contact, index) in contacts"
            :key="index"
            :title="contact.title"
            :imageUrl="contact.imageUrl"
            :to="contact.to"
        />
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">

import FAQ from "~/components/FAQ.vue";
import ContactComponent from "~/components/ContactComponent.vue";

const contacts = [
  { title: "About Us", imageUrl: "/icons/aboutUs.png", to: "/about" },
  { title: "Contact", imageUrl: "/icons/phone.png", to: "/contacts" }
];

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

.title-container {
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

.page-image {
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
  box-sizing: border-box;
}

.faq-container {
  justify-items: center;
  justify-content: center;
  align-items: center;

}

.contact-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 100px;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

.contact-row > * {
  flex: 1; /* Ensures equal width for all components */
  min-width: 150px; /* Prevents components from shrinking too much */
}

h1 {
  font-size: clamp(3rem, 6vw, 4rem);
  margin-bottom: 20px;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.5rem;
  margin-bottom: 50px;
}
a {
  font-size: 1rem;
  color: #42b983;
  text-decoration: underline;
}

</style>