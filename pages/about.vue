<script>
</script>

<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
        <div class="content">

          <br><h1>About Us</h1>
          <img src="/yogaCenterAboutUs.jpg" alt="About Us Image" id="aboutUs"/>

        </div>

      <div class="ourHistoryParent">
        <b class="ourHistory">Our History</b>
        <div class="loremIpsumDolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        <div class="loremIpsumDolor1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
      </div>

      <div class="rectangleParent">
        <img class="frameChild" alt="" src="/aboutUsTeacher1.png" />
        <div class="teacher">
          <img class="imageIcon" alt="" src="/aboutUsTeacher2.png" />
        </div>
      </div>



      <div class="AboutUsEpilogueContainer">
        <h2>Regulation</h2>
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
@import "../assets/global.css" ;

#aboutUs{
  margin-top: 80px;
}

.ourHistory {
  width: 857px;
  position: relative;
  font-size: 60px;
  line-height: 114px;
  display: inline-block;
  text-align: center;
  flex-shrink: 0;
}
.loremIpsumDolor {
  width: 560px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 500px;
  flex-shrink: 0;
}
.loremIpsumDolor1 {
  width: 560px;
  position: relative;
  line-height: 41px;
  font-weight: 300;
  display: inline-block;
  height: 500px;
  flex-shrink: 0;
}
.ourHistoryParent {
  position: relative;
  top: 0px;
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
  width: 616px;
  position: relative;
  height: 580px;
  object-fit: cover;
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
  overflow: hidden;
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
  margin-top: 160px;
}

h2{
  text-align: center;
}

</style>