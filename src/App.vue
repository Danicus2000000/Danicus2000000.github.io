<template>
  <div class="portfolio-app" :data-theme="theme">
    <div class="orb orb-one" aria-hidden="true" />
    <div class="orb orb-two" aria-hidden="true" />
    <div class="orb orb-three" aria-hidden="true" />

    <NavBar :theme="theme" @theme-toggle="toggleTheme" />
    <Banner />
    <Skills />
    <Projects />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

const theme = ref<"dark" | "light">("dark");

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
</script>
