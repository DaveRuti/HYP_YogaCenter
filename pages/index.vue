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

    <section class="cta">
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
        <button class="arrow left" @click="scrollLeft">❮</button>
        <div class="slider">
            <ItemTeacher
                v-for="teacher in teachers"
                :id="teacher.id"
                :title="`${teacher.name} ${teacher.surname}`"
                :imageUrl="teacher.image[0]?.url"
                :route="`/teacher/${teacher.id}`"
            />
        </div>
        <button class="arrow right" @click="scrollRight">❯</button>
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
import ItemTeacher from "~/components/ItemTeacher.vue";

export default {
  name: 'App',
  components: {
    ItemTeacher,
    Navbar,
    Footer
  },
  methods: {
    scrollLeft() {
      const slider = this.$el.querySelector('.slider');
      slider.scrollLeft -= 300; // Scorri a sinistra di 300px
    },
    scrollRight() {
      const slider = this.$el.querySelector('.slider');
      slider.scrollLeft += 300; // Scorri a destra di 300px
    }
  },
  setup() {
    const heroImage = ref('/assets/hero yoga image.jpg');
    const ctaImage = ref('/assets/green background.png');
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
      const slider = document.querySelector('.slider');

      if (slider) {

        slider.addEventListener('wheel', (e) => {
          const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

          if (!isHorizontalScroll) {
            // Permetti lo scrolling verticale
            return;
          }

          // Impedisci lo scrolling verticale di default solo per lo slider
          e.preventDefault();
          slider.scrollLeft += e.deltaY;
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
  background-image: url('/assets/greenBackground.png') ;
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
  //background: rgba(0, 0, 0, 0.4);
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
  padding: 8rem 0;
  background-color: white;
  text-align: center;
  align-items: center;
}

.slider-container {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.slider {
  justify-content: center; /* Centra il contenuto orizzontalmente */
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
}

.slider > * {
  flex: 0 0 auto; /* Ensures children maintain their natural size */
}

.slider::-webkit-scrollbar {
  display: none; /* Nasconde la scrollbar */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}


/* Responsive */
@media (max-width: 1200px) {
  .card {
    width: calc(33.33% - 1.5rem);
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
  .slider {
    gap: 20px;
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