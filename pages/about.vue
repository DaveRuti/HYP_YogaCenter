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

      <div class="imagesParent">
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
          <li>Remember to bring all the necessary things with you to enjoy the lessons at best.</li>
          <li>Do not leave trash or any other thing around during outside activities.</li>
          <li>There is no need to fit in every exercise we do, you are here to enjoy the experience!</li>
        </ol>
      </div>

    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>

</template>

<style scoped>

@import "../assets/global.css" ;
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

.ourHistoryParent {
  position: relative;
  line-height: 41px;
  font-weight: 300;
  //height: 500px;
  //flex-shrink: 0;
  flex: 1;
  font-size: 20px;
  margin-bottom: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 78px 104px;
  //margin: 0 auto;
}

.loremIpsumDolor {
  width: 500px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: auto;
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
  height: auto;
  flex-shrink: 0;
  font-size: 20px;
  text-align: justify;
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
  aspect-ratio: 404 / 505;
  min-width: 200px;
  min-height: 180px;
}

.imageIcon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 616px;
  max-height: 580px;
  object-fit: cover;
  //aspect-ratio: 404 / 505;
}
.teacher {
  width: 612px;
  position: relative;
  height: 543px;
}
.imagesParent {
  position: relative;
  //width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 68px;
  //margin-left: 400px;
  //left: calc(50% - 1016px);
  //margin: 0 auto;
  //overflow: hidden;
  //cursor: pointer;
  padding-left: 30px;

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
  width: auto;
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
  padding: 120px 120px;
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
  .imagesParent{
    padding-left: 50px;
  }
}


@media (max-width: 700px) {
  .ourHistoryParent{
    flex-direction: column;
  };

  .loremIpsumDolor{
    width: auto;
  }

  .loremIpsumDolor1{
    width: auto;
  }

  #regulation{
    font-size: 45px;
  };

  .teacher{
    width: 450px;
    height: 450px;
  }

}

@media (max-width: 1000px) {
  .AboutUsEpilogueContainer {
    padding: 20px 20px;
    font-size: 24px;
  }
}

@media (max-width: 1200px) {
  .imagesParent{
    flex-direction: column;
  }
}

@media (min-width: 1700px) {
  .imagesParent{
    margin-left: 350px;
  }
}

@media (max-width: 440px) {
  .teacher{
    //width: auto;
    width: 250px;
    height: 250px;
  }
}



</style>