<script>
</script>

<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">

      <div class="title">
        <div class="content">
          <h1>About Us</h1>
          <p>Our story, our passion for yoga, and our community.</p>
        </div>
      <img src="/aboutUs1.png" alt="About Us Image" class="top-image">
      </div>

      <div class="ourHistoryParent">
        <div class="loremIpsumDolor">InnerFlow was born from a simple, powerful idea: that true balance begins within.
          Founded in 2021 by a group of friends and yoga teachers, InnerFlow started as a shared dream—to create a peaceful
          space in the heart of the city where people could reconnect with themselves, breathe deeply, and move with intention.</div>
        <div class="loremIpsumDolor1">Each of us came to yoga for different reasons: to heal, to slow down, to grow stronger,
          to find clarity. What we discovered was something deeper—a practice that connected body, mind, and spirit, and
          a community that supported us along the way. InnerFlow grew from those roots.</div>
      </div>

      <div class="image">
        <img class="frameChild" alt="" src="/OldPhoto.png" />
        <div class="textNextToImage">
          Today, we offer a range of classes from dynamic Vinyasa flows to deeply restorative practices, guided by
          teachers who honor both tradition and personal transformation. Our studio is more than a place to stretch—it’s
          place to feel, to reflect, and to belong. Whether you're stepping onto the mat for the first time or deepening
          a lifelong practice, InnerFlow welcomes you. This is your space to move inward, breathe fully, and flow freely.
        </div>
      </div>

    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>

</template>

<style scoped>

@import "../assets/css/global.css";
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.main {
  text-align: center;
  padding: 100px 20px 50px;
}

h1 {
  font-size: clamp(3rem, 6vw, 4rem);
}
h2 {
  font-size: 1.5rem;
}
p {
  font-size: 1.5rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap; /* permette layout a colonna su mobile */
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
}

.top-image{
  max-width: 500px;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}

.ourHistoryParent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-content: center;
  column-gap: 80px;
  padding-bottom: 50px;
}

.loremIpsumDolor {
  width: 500px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  font-size: 20px;
  text-align: justify;
}

.loremIpsumDolor1 {
  width: 500px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  font-size: 20px;
  text-align: justify;
}

.frameChild {
  max-width: 500px;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.textNextToImage {
  max-width: 500px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
  text-align: justify;
}

.image {
  align-items: start;
  padding-top: 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 80px;
}

ol {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: 43px;
}

li {
  margin-bottom: 50px;
}

@media (max-width: 1468px) {
  #aboutUs{
    width: 80%;
    min-height: 200px;
    min-width: 300px;
  }
}

</style>