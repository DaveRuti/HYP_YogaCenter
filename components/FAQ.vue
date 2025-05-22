<template>
  <div class="faq-container">
    <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
    >
      <div
          class="faq-question"
          role="button"
          :aria-expanded="faq.show"
          @click="toggleAnswer(index)"
      >
        <span>{{ faq.question }}</span>
        <span :class="['arrow', { 'arrow-rotated': faq.show }]"></span>
      </div>
      <transition name="fade">
        <div
            v-if="faq.show"
            class="faq-answer"
        >
          {{ faq.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue';

const faqs = reactive([
  {
    question: 'What is InnerFlow?',
    answer:
        'InnerFlow is a yoga and wellness space dedicated to cultivating balance, mindfulness, and inner connection. Our classes combine traditional practices with a modern approach, welcoming everyone—regardless of experience—to explore movement, breath, and stillness in a supportive community.',
    show: false,
  },
  {
    question: 'How can I contact support?',
    answer:
        'You can reach us by email at support@innerflow.com or by calling the number +39 000 000 0000.',
    show: false,
  },
  {
    question: 'What should I bring to my first class?',
    answer:
        'We recommend bringing a yoga mat, a water bottle, and a towel. If you don’t have a mat, we have some available at the studio.',
    show: false,
  },
  {
    question: 'How early should I arrive before class?',
    awswer: 'We recommend arriving at least 10 minutes early to get settled, especially if it’s your first time.',
    show: false,
  },
]);

function toggleAnswer(index) {
  faqs[index].show = !faqs[index].show;
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  font-family: 'Nunito Sans', sans-serif;
}

.faq-container {
  max-width: 800px; /* puoi regolare a piacere */
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  justify-content: center;
  }


.faq-item {
  margin-bottom: 15px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  justify-content: center;
}

.faq-question {
  font-weight: 600;
  font-size: 1.2rem;
  padding: 15px 20px;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #eee;
}

.arrow {
  width: 0;
  height: 0;
  margin-left: 10px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  transition: transform 0.3s ease;
}

.arrow-rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 15px 20px;
  background-color: #eee;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  transition: max-height 0.3s ease;
  text-align: left;
}

/* Fade transition for answer */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>