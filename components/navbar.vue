<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}

import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const underlineRef = ref(null)
const navLinksRef = ref(null)

const moveUnderline = (el) => {
  if (!el || !underlineRef.value || !navLinksRef.value) return

  const linkRect = el.getBoundingClientRect()
  const navRect = navLinksRef.value.getBoundingClientRect()

  underlineRef.value.style.width = `${linkRect.width}px`
  underlineRef.value.style.left = `${linkRect.left - navRect.left}px`
}

const updateToActive = () => {
  nextTick(() => {
    const active = navLinksRef.value?.querySelector('.nav-link.active-link')
    if (active) moveUnderline(active)
  })
}

onMounted(() => {
  updateToActive()

  const links = navLinksRef.value.querySelectorAll('.nav-link')
  links.forEach(link => {
    link.addEventListener('mouseenter', () => moveUnderline(link))
    link.addEventListener('mouseleave', updateToActive)
  })
})

watch(() => route.fullPath, () => {
  updateToActive()
})
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

    <ul class="nav-links" :class="{ show: isMenuVisible }" ref="navLinksRef">
      <li><NuxtLink to="/" exact-active-class="active-link" class="nav-link">Home</NuxtLink></li>
      <li><NuxtLink to="/highlights" exact-active-class="active-link" class="nav-link">Highlights</NuxtLink></li>
      <li><NuxtLink to="/activitieslist" active-class="active-link" class="nav-link">Activities</NuxtLink></li>
      <li><NuxtLink to="/teacherslist" active-class="active-link" class="nav-link">Teachers</NuxtLink></li>
      <li><NuxtLink to="/about" exact-active-class="active-link" class="nav-link">About Us</NuxtLink></li>
      <li><NuxtLink to="/contacts" exact-active-class="active-link" class="nav-link">Contacts</NuxtLink></li>
      <li><NuxtLink to="/faq" exact-active-class="active-link" class="nav-link">FAQ</NuxtLink></li>
      <span ref="underlineRef" class="underline"></span>
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
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: black;
  font-size: 35px;
  padding: 0.7rem 2rem;
}

.router-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.nav-links {
  text-decoration: none;
  position: relative;
  display: flex;
  list-style: none;
  padding-right: 1rem;
  align-items: stretch;
  justify-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding: 0 1.5rem;
  text-decoration: none;
  color: black;
  font-weight: 600;
  cursor: pointer;
}

.underline {
  position: absolute;
  bottom: 0;
  height: 4px;
  /*background-color: #00ff88;  old green color*/
  background-color: black;
  transition: all 0.2s ease;
  width: 0;
  left: 0;
  pointer-events: none;
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

@media (max-width: 1100px) {
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    padding: 2.3rem 5rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    color: black;
    transition: box-shadow 0.3s ease, transform 0.4s ease;
    border-bottom: 6px solid transparent;
  }

  .nav-links li a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 6px;
    background-color: black;
    transition: transform 0.3s ease;
  }

  /* Hover: espande la linea */
  .nav-links li a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  /* Link attivo: linea nera statica */
  .nav-links li a.active-link::after {
    background-color: black;
    transform: translateX(-50%) scaleX(1);
  }

  .underline {
    display: none;
  }

  .menu-icon {
    display: block;
    cursor: pointer;
    margin-top: 0.8rem;
    margin-right: 1.5rem;
  }
}

</style>