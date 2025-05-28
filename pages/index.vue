<template>
  <div>
    <div class="page">
      <div class="navbar">
        <Navbar />
      </div>

      <div class="main">
        <div class="content">
          <section class="hero">
            <div class="hero-content">
              <div class="hero-text-container">
                <h1 class="hero-title">Flow into - Peace<br>One Pose at a Time</h1>
                <p class="hero-description">Whether you are mastering or beginning your journey, join our community for rejuvenating towards well-being</p>
                <a href="/activitieslist" class="btn btn-light">See All Activities</a>
              </div>

              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">1000</span>
                  <span class="stat-text">Happy Students</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">50+</span>
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
            <a href="/highlights" class="btn btn-green">See Highlights</a>

            <div class="cards-container">
              <HighlightsComponent
                  v-for="(activity, index) in highlightedActivities"
                  :id="activity.id"
                  :class="{ 'offset-card': index % 2 !== 0 }"
                  :title="activity.title"
                  :description="activity.description"
                  :imageUrl="activity.image?.[0]?.url"
              />

          </div>
        </section>

        <section class="cta">
          <div class="cta-content">
            <h2 class="cta-title">Connect, Grow and<br>Thrive Together</h2>
            <p class="cta-description">Our range of classes and activities is designed to support every body and every intention—whether you're seeking strength, stillness, flexibility, or simply a moment of peace.
              From energizing Vinyasa flows to guided meditation, workshops, and special events, each offering is crafted to help you reconnect, reset, and rediscover your inner flow.</p>
            <a href="/activitieslist" class="btn btn-light">See All Activities</a>
          </div>
        </section>

        <section class="teachers">
          <h2 class="section-title">Know your teachers</h2>
          <p class="section-description">At InnerFlow, our teachers are the heart of our community. Each of them brings a unique blend of experience, compassion, and deep knowledge of yoga and mindfulness. Whether guiding a dynamic flow or a gentle restorative practice, they hold space with presence and care—supporting you on your journey, one breath at a time.</p>
          <a href="/teacherslist" class="btn btn-green">Know your teachers</a>

          <div class="slider-container">
            <button class="arrow left" v-if="showLeftArrow" @click="scrollLeft">❮</button>
            <div class="slider">
                <ItemTeacher
                  v-for="teacher in teachers"
                  :id="teacher.id"
                  :title="`${teacher.name} ${teacher.surname}`"
                  :imageUrl="teacher.image[0]?.url"
                  :route="`/teacher/${teacher.id}`"
                />
            </div>
            <button class="arrow right" v-if="showRightArrow" @click="scrollRight">❯</button>
          </div>
        </section>


      </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
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
      if (slider) {
        slider.scrollBy({
          left: -300, // Scroll 300px to the left
          behavior: 'smooth', // Enable smooth scrolling
        });
      }
    },
    scrollRight() {
      const slider = this.$el.querySelector('.slider');
      if (slider) {
        slider.scrollBy({
          left: +300, // Scroll 300px to the left
          behavior: 'smooth', // Enable smooth scrolling
        });
      }
    }
  },
  setup() {
    const heroImage = ref('/assets/hero yoga image.jpg');
    const ctaImage = ref('/assets/green background.png');
    const highlightedActivities = ref([]);
    const teachers = ref([]);
    const showLeftArrow = ref(false);
    const showRightArrow = ref(false);

    const updateArrows = () => {
      const slider = document.querySelector('.slider');
      if (!slider) return;
      showLeftArrow.value = slider.scrollLeft > 0;
      showRightArrow.value = slider.scrollLeft + slider.offsetWidth < slider.scrollWidth - 1;
    };


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
          setTimeout(() => {
            updateArrows();
            const slider = document.querySelector('.slider');
            if (slider) slider.scrollLeft = 0;
          }, 0);
        } else {
          console.error('Error fetching teachers:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    // Gestione del drag and drop per lo slider
    let isDown = false;
    let startX;
    let scrollLeft;

    const enableSliderDrag = () => {
      const slider = document.querySelector('.slider');
      if (!slider) return;

      const mouseDown = (e) => {
        isDown = true;
        slider.classList.add('dragging');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      };

      const mouseLeave = () => {
        isDown = false;
        slider.classList.remove('dragging');
      };

      const mouseUp = () => {
        isDown = false;
        slider.classList.remove('dragging');
      };

      const mouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); // distanza trascinata
        slider.scrollLeft = scrollLeft - walk;
      };

      slider.addEventListener('mousedown', mouseDown);
      slider.addEventListener('mouseleave', mouseLeave);
      slider.addEventListener('mouseup', mouseUp);
      slider.addEventListener('mousemove', mouseMove);

      // Pulizia
      onBeforeUnmount(() => {
        slider.removeEventListener('mousedown', mouseDown);
        slider.removeEventListener('mouseleave', mouseLeave);
        slider.removeEventListener('mouseup', mouseUp);
        slider.removeEventListener('mousemove', mouseMove);
      });
    };

    function debounce(fn, delay) {
      let timer = null;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    const debouncedUpdateArrows = debounce(updateArrows, 50);

    onMounted(() => {
      fetchHighlightedActivities();
      fetchTeachers();
      window.addEventListener('resize', handleResize);
      handleResize();

      // Aggiorna le frecce quando si scrolla
      setTimeout(() => {
        const slider = document.querySelector('.slider');
        if (slider) slider.addEventListener('scroll', debouncedUpdateArrows);
        updateArrows();
        enableSliderDrag();
      }, 0);
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
      handleResize,
      showLeftArrow,
      showRightArrow,
    };
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  overflow-x: hidden;
}

.main {
  flex: 1;
  padding-left: 0;
  padding-right: 0;
}

.content {
  padding-top: 10px;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100%;
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
  background-image: url('/assets/yogaGD.png');
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


.cards-container > * {
  flex: 1 1 calc((100% - 3 * 2.5rem) / 4);
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
  /*background: rgba(0, 0, 0, 0.4);*/
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
  overflow-x: auto;
}

.slider {
  padding: 0 30px;
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
}

.slider > * {
  flex: 0 0 400px; /* Larghezza fissa per ogni card */
  max-width: 400px;
}

.slider::-webkit-scrollbar {
  display: none; /* Nasconde la scrollbar */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #08663A ;
  color: white;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  opacity: 0.6;
}

.arrow:hover {
  opacity: 1;
  transition: opacity 0.3s ease;
  }

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}


/* Responsive */


@media (max-width: 1200px) {
  .cards-container > * {
    flex: 1 1 calc((100% - 2 * 2.5rem) / 3);
  }

  .hero {
    position: relative;
    height: 100%;
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
}


@media (max-width: 900px) {
  .content {
    padding-top: 50px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero {
    aspect-ratio: 10/9;
  }

  .hero-title{
    padding-top: 0;
  }


  .cards-container > * {
    flex: 1 1 calc((100% - 1 * 2.5rem) / 2);
  }


  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns */
    gap: 2rem; /* Spacing between items */
    margin-top: 3rem;
  }

  .stat-number{
    font-size: 2rem;
  }

  .stat-text{
    font-size: 1rem;
  }


  .cta-title {
    font-size: 2.3rem;
  }
}


@media (max-width: 600px) {

  .content {
    padding-top: 50px;
  }

  .hero {
    aspect-ratio: 8/9;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns */
    gap: 2rem; /* Spacing between items */
    margin-top: 3rem;
  }

  .stat-number{
    font-size: 1.5rem;
  }

  .stat-text{
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }


  .cards-container > * {
    flex: 1 1 100%;
  }


  .cta-title {
    font-size: 2rem;
  }


  .cta-description {
    font-size: 1rem;
  }
}

</style>