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
          <h1 v-if="error.statusCode === 500">500 - Internal Server Error</h1>
          <h1 v-if="error.statusCode === 404">404 - Page not found
          <br><h2>Even websites lose their balance sometimes.</h2>
          </h1>
          <h1 v-else>Oops! Something went wrong</h1>

          <p>{{ error.message }}</p>
        </div>
        <img src="/error.png" alt="Error Image" class="error-image"/>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

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
  padding: 50px 20px;
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