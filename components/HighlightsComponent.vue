<template>
  <div class="component3">
    <div class="inner">
      <div class="image"></div>
      <div class="content">
        <h1 class="title">Yin Yoga</h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <TheButton/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YinYogaComponent"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&family=Roboto:wght@500&display=swap');

.component3 {
  width: 1277.6px;
  height: 724px;
  /*width: 1277.6px;
  height: 724px;
  padding: 40px;
   */
  margin: 0 auto;
  border-radius: 56px;
  background: #fff;
  box-shadow: 0 0 21.04px 6.4px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  display: flex;
  align-items: flex-start;
  gap: 80px;
}

.image {
  width: 480px;
  height: 572px;
  border-radius: 20px;
  background-image: url('../assets/HighlightsImage.png');
  background-position: -191.2px 0;
  background-size: 178.894% 100%;
  flex-shrink: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 550.4px;
}

.title {
  width: 100%;
  color: #000;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 76.8px;
  font-weight: 700;
  text-decoration: none;
}

.description {
  width: 100%;
  height: 171.2px;
  color: #000;
  text-align: justify;
  font-family: "Nunito Sans", sans-serif;
  font-size: 25.6px;
  font-weight: 300;
  line-height: 32.8px;
  text-decoration: none;
}

.btn {
  padding: 10.036px 24.087px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.073px;
  letter-spacing: 0.1px;
  color: #fff;
  background-color: #2E7D32;
  border: none;
  border-radius: 799.2px;
  cursor: pointer;
}


@media (max-width: 768px) {
  .component3 {
    width: 100%;
    height: auto;
    padding: 16px;
    border-radius: 24px;
  }
  .inner {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .image {
    width: 100%;
    height: auto;
    aspect-ratio: 480 / 572;
    border-radius: 16px;
    background-position: center;
    background-size: cover;
  }
  .content {
    width: 100%;
    gap: 16px;
  }
  .title {
    font-size: 32px;
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .btn {
    width: 100%;
    max-width: 240px;
    padding: 12px 0;
  }
}
</style>


