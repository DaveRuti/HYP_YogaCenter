<template>
  <div class="card" @click="goToTeacherPage">
    <img :src="imageUrl" :alt="title" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ truncatedDescription }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    /**
     * Card title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * URL for the card image
     */
    imageUrl: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/300x200?text=No+Image'
    },
    /**
     * Card description text
     */
    description: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    truncatedDescription() {
      const maxLength = 225; // Numero massimo di caratteri
      if (this.description.length > maxLength) {
        return this.description.slice(0, maxLength) + '...';
      }
      return this.description;
    }
  },
  methods: {
    goToTeacherPage() {
      // Navigate to the teacher page using the provided ID
      this.$router.push({ name: 'activity-activity', params: { activity: this.id } });
    }
  }
};
</script>


<style scoped>
.card {
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-top: 0;
}


.card:hover {
  transform: translateY(-5px);
}


.card-image {
  width: 100%;
  height: 250px;
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
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Numero massimo di righe */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


/* Responsive Adjustments
@media (max-width: 1200px) {
 .card {
   width: calc(33.33% - 1.5rem);
 }
}


@media (max-width: 900px) {
 .card {
   width: calc(50% - 1.5rem);
 }
}


@media (max-width: 600px) {
 .card {
   width: 100%;
   margin-top: 0 !important;
 }
} */
</style>



