<template>
  <div class="navbar">
    <Navbar />
  </div>

  <div class="highlights-container">
    <h1 class="title">Highlights</h1>
    <p class="subtitle">Taste our newest activities designed for your yoga needs</p>

    <!-- Highlights Sections -->
    <div
        v-for="(activity, index) in highlightedActivities"
        :key="activity.id"
        class="highlight-section"
        :class="{ 'inverted': index % 2 !== 0 }"
    >
      <div class="highlight-image" v-if="activity.image && activity.image.length">
        <img
            :src="activity.image[0].url"
            :alt="activity.title"
        />
      </div>

      <div class="highlight-content">
        <h2 class="highlight-title">{{ activity.title }}</h2>
        <p class="highlight-description">{{ activity.description }}</p>
        <div class="button-container">
          <button class="learn-more">Learn more...</button>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

const highlightedActivities = ref([])

const fetchHighlightedActivities = async () => {
  try {
    const response = await fetch('/api/highlights')
    const data = await response.json()

    if (data && !data.error) {
      highlightedActivities.value = data
      console.log('Highlighted activities loaded:', data)
    } else {
      console.error('Error fetching highlights:', data.error)
    }
  } catch (error) {
    console.error('Failed to fetch highlighted activities:', error)
  }
}

onMounted(() => {
  fetchHighlightedActivities()
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.highlights-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  padding-top: 150px; /* spazio sotto navbar */
}

.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}

.highlight-section {
  display: flex;
  margin-bottom: 5rem;
  gap: 2rem;
  align-items: center;
}

.highlight-section.inverted {
  flex-direction: row-reverse;
}

.highlight-image {
  flex: 1;
  max-width: 50%;
}

.highlight-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.highlight-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.highlight-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  align-self: center;
}

.highlight-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
}

.learn-more {
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.learn-more:hover {
  background-color: #1b5e20;
}

.footer {
  padding-top: 50px;
  width: 100%;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .highlight-section,
  .highlight-section.inverted {
    flex-direction: column;
  }

  .highlight-image {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .highlight-title {
    font-size: 2rem;
  }
}
</style>

