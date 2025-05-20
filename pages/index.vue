<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>

    <section class="hero">
      <div class="hero-content">
        <div class="hero-text-container">
          <h1 class="hero-title">Flow into - Peace<br>One Pose at a Time</h1>
          <p class="hero-description">Whether you are mastering or beginning your journey, join our community for rejuvenating towards well-being</p>
          <a href="#" class="btn btn-light">See All Activities</a>
        </div>

        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">10,000</span>
            <span class="stat-text">Happy Students</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5,000+</span>
            <span class="stat-text">Classes Monthly</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">95%</span>
            <span class="stat-text">Member satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    <section class="activities">
      <h2 class="section-title">Your healthy activities</h2>
      <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="btn btn-green">See Highlights</a>

      <div class="cards-container">
        <div
            class="card"
            v-for="(activity, index) in highlightedActivities"
            :key="activity.id"
            :class="{ 'offset-card': index % 2 !== 0 }"
        >
          <img :src="activity.image?.[0]?.url" :alt="activity.title" class="card-image">
          <div class="card-content">
            <h3 class="card-title">{{ activity.title }}</h3>
            <p class="card-description">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta" :style="{ backgroundImage: `url(${ctaImage})` }">
      <div class="cta-content">
        <h2 class="cta-title">Connect, Grow and<br>Thrive Together</h2>
        <p class="cta-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" class="btn btn-light">See All Activities</a>
      </div>
    </section>

    <section class="teachers">
      <h2 class="section-title">Know your teachers</h2>
      <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="btn btn-green">Know your teachers</a>

      <div class="slider-container">
        <div class="slider">
          <div class="slide" v-for="teacher in teachers" :key="teacher.id">
            <img :src="teacher.image?.[0]?.url" :alt="`${teacher.name} ${teacher.surname}`" class="slide-image">
            <div class="slide-title">{{ teacher.name }} {{ teacher.surname }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const heroImage = ref('/assets/hero yoga image.jpg');
    const ctaImage = ref('https://source.unsplash.com/random/1600x900/?yoga,nature');
    const highlightedActivities = ref([]);
    const teachers = ref([]);

    // Fetch delle attività in evidenza dall'API
    const fetchHighlightedActivities = async () => {
      try {
        const response = await fetch('/api/highlights');
        const data = await response.json();

        if (data && !data.error) {
          highlightedActivities.value = data;
          console.log('Highlighted activities loaded:', data);
        } else {
          console.error('Error fetching highlights:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch highlighted activities:', error);
      }
    };

    // Fetch degli insegnanti dall'API
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/api/teachers');
        const data = await response.json();

        if (data && !data.error) {
          teachers.value = data;
        } else {
          console.error('Error fetching teachers:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    onMounted(() => {
      fetchHighlightedActivities();
      fetchTeachers();

      // Horizontal scroll for slider with mouse wheel
      const sliderContainer = document.querySelector('.slider-container');
      if (sliderContainer) {
        sliderContainer.addEventListener('wheel', (e) => {
          e.preventDefault();
          sliderContainer.scrollLeft += e.deltaY;
        });
      }

      window.addEventListener('resize', handleResize);
      handleResize();
    });

    const handleResize = () => {
      // Adjust slider if needed based on screen size
      const slider = document.querySelector('.slider');
      if (slider) {
        // Implementation of responsive adjustments if needed
      }
    };

    return {
      heroImage,
      ctaImage,
      highlightedActivities,
      teachers,
      handleResize
    };
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  overflow-x: hidden;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Assicura che la navbar sia sopra gli altri elementi */

}

.footer {
  padding-top: 50px;
  width: 100%;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  aspect-ratio: 16/9;
  margin-top: 0; /* Rimuove lo spazio tra navbar e hero */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/HeroYogaImage.jpg');
  background-position: center;
  background-size: cover;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 800px;
  padding: 0 10%; /* Padding per il contenuto */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-light {
  background-color: white;
  color: #333;
}

.btn-light:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

/* Stats Section */
.stats {
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-text {
  font-size: 1rem;
}

/* Activities Section */
.activities {
  padding: 8rem 10%;
  background-color: white;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn-green {
  background-color: #2a6f4d;
  color: white;
  margin-bottom: 4rem;
}

.btn-green:hover {
  background-color: #1e5239;
  transform: translateY(-2px);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;
}

.card {
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  width: calc(25% - 1.5rem);
  min-width: 220px;
  max-width: 300px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-top: 0;
}

.offset-card {
  margin-top: 10px;
  flex-grow: 1;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
  text-align: left;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

/* Call to Action Section */
.cta {
  position: relative;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  text-align: center;
  aspect-ratio: 16/9;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 800px;
}

.cta-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Teachers Section */
.teachers {
  padding: 8rem 10%;
  background-color: white;
  text-align: center;
}

.slider-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 4rem;
  padding: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.slider-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.slider {
  display: flex;
  gap: 30px;
  width: fit-content;
  padding: 0 10%;
  margin: 0 auto;
}

.slide {
  position: relative;
  min-width: calc(45% - 14px);
  flex: 0 0 calc(45% - 14px);
  overflow: hidden;
  border-radius: 10px;
  max-width: 650px;
  aspect-ratio: 3/4;
  margin: 0 7px;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

.slide-title {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Responsive */
@media (max-width: 1200px) {
  .card {
    width: calc(33.33% - 1.5rem);
  }

  .slide {
    min-width: calc(70% - 20px);
    flex: 0 0 calc(70% - 20px);
  }
}

@media (max-width: 900px) {
  .hero-title {
    font-size: 3rem;
  }

  .stats {
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    width: calc(50% - 1.5rem);
  }

  .cta-title {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .slide {
    min-width: calc(100% - 20px);
    flex: 0 0 calc(100% - 20px);
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .card {
    width: 100%;
    margin-top: 0 !important;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1rem;
  }
}
</style>