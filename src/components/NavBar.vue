<template>
  <nav class="navbar navbar-expand-md" :class="{ scrolled }">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img :src="logo" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
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
            href="mailto:testertestington940@gmail.com?subject=Website%20-%20get%20in%20touch%20here%20from%20https%3A%2F%2Fdanicus2000000.github.io"
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
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/linkedinIcon.svg";
import navIcon2 from "../assets/img/github-mark.svg";

const activeLink = ref("home");
const scrolled = ref(false);
const isMenuOpen = ref(false);

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
