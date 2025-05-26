<template>
  <div class="page">
    <div class="navbar">
      <Navbar />
    </div>


    <div class="main">


      <div class="content">
        <h1>Highlights</h1>
        <p>Taste our newest activities designed for your yoga needs</p>
      </div>


      <!-- Highlights Sections -->
      <div class="cards-container">
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
      </div>
    </div>


    <div class="footer">
      <Footer />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
import HighlightsComponent from "~/components/HighlightsComponent.vue";


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


@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');


* {
  font-family: 'Nunito Sans', sans-serif;
}


.content {
  padding-bottom: 20px;
}


h1{
  font-size: clamp(3rem, 7vw, 5rem);
  margin-bottom: 20px;
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






.footer {
  padding-top: 50px;
  width: 100%;
  margin-top: 2rem;
}


/* 4 → 3 colonne */
@media (max-width: 1200px) {
  .cards-container > * {
    flex: 1 1 calc((100% - 2 * 2.5rem) / 3);
  }
}


/* 3 → 2 colonne */
@media (max-width: 900px) {
  .cards-container > * {
    flex: 1 1 calc((100% - 1 * 2.5rem) / 2);
  }
}


/* 2 → 1 colonna */
@media (max-width: 600px) {
  .cards-container > * {
    flex: 1 1 100%;
  }
}
</style>

