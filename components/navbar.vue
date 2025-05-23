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

    <div class="menu-icon" :class="{ open: isMenuVisible }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="nav-links" :class="{ show: isMenuVisible }">
      <li><NuxtLink to="/highlights" exact-active-class="active-link">Highlights</NuxtLink></li>
      <li><NuxtLink to="/activitieslist" active-class="active-link">Activities</NuxtLink></li>
      <li><NuxtLink to="/teacherslist" active-class="active-link">Teachers</NuxtLink></li>
      <li><NuxtLink to="/about" exact-active-class="active-link">About Us</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');

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
  align-items: stretch;
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
  gap: 1rem;
}

.nav-links li {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 0 1.5rem;
  font-weight: 600;
  /*transition: all 0.3s ease;*/
  transition: border-color 0.3s ease; /* Smooth transition for the border */
  border-bottom: 6px solid transparent; /* Invisible border initially */
  height: 100%;
}

.nav-links li a:hover {
  transform: translateY(-2px);
  /*background-color: #00ff88;
  color: black;
  box-shadow: 0 0 10px #00ff88aa, 0 0 20px #00ff88aa;*/
  border-bottom: 6px solid #00ff88; /* Green underline on hover */
}

.nav-links li a.active-link {
  border-bottom: 6px solid #8cffc9;
}

.menu-icon {
  display: block;
  cursor: pointer;
}

.menu-icon {
  width: 40px;
  height: 40px;
  position: relative;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.menu-icon span {
  display: block;
  height: 4px;
  background-color: black;
  margin: 8px 0;
  border-radius: 3px;
  transition: 0.4s;
  transform-origin: center;
}

/* Icona animata in X */
.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
}

@media (max-width: 850px) {
    .nav-links {
    position: absolute;
    top: 100%;
    left: 1;
    right: 0;
    background-color: #f0f0f0;
    flex-direction: column;
    text-align: center;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 0;
}

  .nav-links.show {
    display: flex;
  }

  .nav-links li {
    width: 100%;
    padding: 0;
    margin: 0;
    gap : 0;
  }

  .nav-links li a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    color: black;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .nav-links li a:hover {
    transform: translateY(-2px);
    /*background-color: #00ff88;
    color: black;
    box-shadow: 0 0 10px #00ff88aa, 0 0 20px #00ff88aa;*/
    border-bottom: 6px solid #00ff88; /* Green underline on hover */
  }

  .nav-links li a.active-link {
    border-bottom: 6px solid #8cffc9;
  }

  .menu-icon {
    display: block;
    cursor: pointer;
  }
}


</style>