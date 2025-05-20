<template>
  <div class="faq-container">
    <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
    >
      <div
          class="faq-question"
          @click="toggleAnswer(index)"
      >
        {{ faq.question }}
        <span :class="{'arrow-rotated': faq.show}" class="arrow"></span>
      </div>
      <div
          v-if="faq.show"
          class="faq-answer"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const faqs = reactive([
  { question: 'What is InnerFlow?', answer: 'InnerFlow is a platform for...', show: false },
  { question: 'How can I contact support?', answer: 'You can contact support via...', show: false },
  { question: 'What are the pricing plans?', answer: 'Our pricing plans include...', show: false },
]);

function toggleAnswer(index) {
  faqs[index].show = !faqs[index].show;
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

* {
  font-family: 'Nunito Sans', sans-serif;
}

.faq-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

.faq-item {
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.3s ease;
}

.faq-item:hover {
  color: #007BFF;
}

.faq-question {
  font-weight: 900;
  font-size: 1.3rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  transition: transform 0.3s ease;
}

.arrow-rotated {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 5px;
  color: #666;
  font-size: 1.3rem;
}
</style>