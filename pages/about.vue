<script>

import {defineComponent} from "vue";
import ContactComponent from "~/components/ContactComponent.vue";
import FAQ from "~/components/FAQ.vue";

export default defineComponent({
  components: {FAQ, ContactComponent}
})
</script>

<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
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

<style scoped>
@import "../assets/global.css" ;

</style>