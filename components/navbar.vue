<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="router-link">
    <div class="logo">
      <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7288 4.2429C10.3855 1.8996 6.58624 1.8996 4.24293 4.24291C1.89963 6.58621 1.89963 10.3855 4.24293 12.7288L27.4035 35.8893C29.7468 38.2326 33.546 38.2326 35.8894 35.8893C38.2327 33.546 38.2327 29.7468 35.8894 27.4035L12.7288 4.2429Z" fill="black"/>
        <path d="M60.7571 12.7288C63.1004 10.3855 63.1004 6.58624 60.7571 4.24293C58.4138 1.89963 54.6145 1.89963 52.2712 4.24294L4.24297 52.2712C1.89966 54.6145 1.89966 58.4138 4.24297 60.7571C6.58628 63.1004 10.3855 63.1004 12.7288 60.7571L60.7571 12.7288Z" fill="black"/>
        <path d="M32.5001 13.821C35.6437 13.821 38.192 11.2726 38.192 8.12898C38.192 4.98539 35.6437 2.43701 32.5001 2.43701C29.3565 2.43701 26.8081 4.98539 26.8081 8.12898C26.8081 11.2726 29.3565 13.821 32.5001 13.821Z" fill="black"/>
      </svg>
      <span>InnerFlow</span>
    </div>
    </router-link>

    <div class="menu-icon" @click="toggleMenu">
      <svg width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="41" height="4" rx="2" fill="black"/>
        <rect y="11" width="41" height="4" rx="2" fill="black"/>
        <rect y="22" width="41" height="4" rx="2" fill="black"/>
      </svg>
    </div>

    <ul class="nav-links" :class="{ show: isMenuVisible }">
      <li><router-link to="/activitieslist">Activities</router-link></li>
      <li><router-link to="/teacherslist">Teachers</router-link></li>
      <li><router-link to="/highlights">Highlights</router-link></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Nunito, sans-serif;
}

.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: black;
  font-size: 35px;
}

.router-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li a {
  color: black;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  background: none;
}

.nav-links li a:hover {
  color: forestgreen;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

@media (max-width: 640px) {
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 70%;
    background-color: #f8f9fa;
    flex-direction: column;
    text-align: center;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.show {
    display: flex;
  }

  .menu-icon {
    display: block;
  }

  .nav-links li {
    text-align: center;
    padding: 1rem;
    width: 100%;
  }
}


</style>