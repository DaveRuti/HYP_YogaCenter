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

      <div class="rectangleParent">
        <img class="frameChild" alt="" src="/aboutUsTeacher1.png" />
        <div class="teacher">
          <img class="imageIcon" alt="" src="/aboutUsTeacher2.png" />
        </div>

      </div>

      <b class="content" id="regulation">Regulation</b>

      <div class="AboutUsEpilogueContainer">

        <br>
        <br>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>sed do eiusmod tempor incididunt ut labore et dolore m</li>
        </ol>
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

.content {
  flex: 1;
  min-width: 280px;
  box-sizing: border-box;
}

.main {
  text-align: center;
  padding: 50px 20px;
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

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-top: 60px;

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

.ourHistory {
  position: relative;
  font-size: 40px;
  line-height: 114px;
  display: inline-block;
  text-align: left;
  flex-shrink: 0;
}
.ourHistoryParent {
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 500px;
  flex-shrink: 0;
  font-size: 20px;
}

.loremIpsumDolor {
  width: 500px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 500px;
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
  height: 500px;
  flex-shrink: 0;
  font-size: 20px;
  text-align: justify;
}

.ourHistoryParent {
  position: relative;
  left: calc(50% - 616px);
  width: 1224px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 78px 104px;
}

.frameChild {
  /*width: 616px;
  height: 580px;*/
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  max-width: 616px;
  max-height: 580px;
}

.imageIcon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  //overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.teacher {
  width: 612px;
  position: relative;
  height: 543px;
}
.rectangleParent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 68px;
  margin-left: 400px;
  left: calc(50% - 1016px);

 /* position: relative;
  top: 0px;
  left: calc(50% - 616px);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;*/
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

.AboutUsEpilogueContainer {
  width: 1430px;
  position: relative;
  font-size: 32px;
  line-height: 41px;
  font-weight: 300;
  font-family: 'Nunito Sans';
  color: #000;
  text-align: justify;
  display: inline-block;
  height: 587px;
  margin-top: -100px;
}

#regulation{
  text-align: center;
  margin-top: 40px;
  width: 587px;
  position: relative;
  font-size: 60px;
  line-height: 114px;
  display: inline-block;
  flex-shrink: 0;
  left: calc(20% - 180px);
  margin-right: calc(20%);
}

@media (min-width: 450px) and (max-width: 1824px) {
  #regulation{
    left: calc(20% - 140px);
  }
}

@media (min-width: 600px) and (max-width: 1024px) {
  #regulation{
    left: calc(20% - 100px);
  }
}

@media (max-width: 1468px) {
  #aboutUs{
    width: 80%;
    min-height: 200px;
    min-width: 300px;
  }
}

@media (max-width: 1000px) {
  .ourHistory{
    font-size: 45px;
  };
  #regulation{
    font-size: 45px;
  };
}

@media (max-width: 1200px) {
  .rectangleParent{
    flex-direction: column;
  }

}

</style>