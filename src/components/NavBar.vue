<template>
  <nav class="navbar navbar-expand-md" :class="{ scrolled, light: theme === 'light' }">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img :src="logo" alt="Logo" />
      </a>
      <div class="navbar-controls">
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        id="basic-navbar-nav"
        class="collapse navbar-collapse"
        :class="{ show: isMenuOpen }"
      >
        <div class="navbar-nav ms-auto">
          <a
            href="#home"
            class="nav-link navbar-link"
            :class="{ active: activeLink === 'home' }"
            @click="setActiveLink('home')"
          >
            Home
          </a>
          <a
            href="#skills"
            class="nav-link navbar-link"
            :class="{ active: activeLink === 'skills' }"
            @click="setActiveLink('skills')"
          >
            Skills
          </a>
          <a
            href="#projects"
            class="nav-link navbar-link"
            :class="{ active: activeLink === 'projects' }"
            @click="setActiveLink('projects')"
          >
            Projects
          </a>
          <a
            href="mailto:queries@dbulman.co.uk?subject=Website%20query%20-%20requested%20via%20site%20mailto%20link%20from%20https%3A%2F%2Fdbulman.co.uk"
            class="nav-link navbar-link"
          >
            Get in touch
          </a>
          <a href="/blog" class="nav-link navbar-link"> My blog </a>
        </div>
        <span class="navbar-text">
          <div class="social-icon">
            <a href="https://github.com/Danicus2000000">
              <img :src="navIcon2" alt="GitHub" />
            </a>
          </div>
          <div class="social-icon">
            <a href="https://www.linkedin.com/in/daniel-bulman-0b58161b6/">
              <img :src="navIcon1" alt="LinkedIn" />
            </a>
          </div>
          <button class="theme-toggle" type="button" :aria-label="themeLabel" :title="themeHoverText" @click="emit('theme-toggle')">
            <span class="theme-toggle__icon" aria-hidden="true">
              <svg class="theme-icon theme-icon--sun" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v3M12 19v3M4.7 4.7l2.2 2.2M17.1 17.1l2.2 2.2M2 12h3M19 12h3M4.7 19.3l2.2-2.2M17.1 6.9l2.2-2.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
              <svg class="theme-icon theme-icon--moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 13.5A6.8 6.8 0 0 1 10.5 6a6 6 0 1 0 7.5 7.5z" fill="currentColor" stroke="currentColor" stroke-width="1.4" />
              </svg>
            </span>
          </button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/linkedinIcon.svg";
import navIcon2 from "../assets/img/github-mark.svg";

const props = defineProps<{ theme: "dark" | "light" }>();
const emit = defineEmits<{ (e: "theme-toggle"): void }>();

const activeLink = ref("home");
const scrolled = ref(false);
const isMenuOpen = ref(false);
const themeLabel = computed(() => props.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
const themeHoverText = computed(() => `Swap to ${props.theme === "dark" ? "light" : "dark"} theme`);

const setActiveLink = (value: string) => {
  activeLink.value = value;
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
