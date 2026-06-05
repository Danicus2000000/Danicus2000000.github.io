<template>
  <section id="skills" class="skill">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>See below a list of my developed skills.</p>
            <div class="skill-carousel" :style="carouselStyle">
              <button
                type="button"
                aria-label="Previous skills"
                class="skill-carousel__btn"
                :disabled="isAnimating"
                @click="startSlide('prev')"
              >
                ◀
              </button>
              <div class="skill-carousel__viewport" :style="viewportStyle">
                <div class="skill-carousel__track" :style="trackStyle">
                  <div
                    v-for="(skill, index) in displayedSkills"
                    :key="index"
                    class="skill-carousel__item"
                    :style="itemStyle"
                  >
                    <h5 style="margin: 0">{{ skill }}</h5>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Next skills"
                class="skill-carousel__btn"
                :disabled="isAnimating"
                @click="startSlide('next')"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from "vue";

const skillValues = [
  "C#",
  "Python",
  "Azure DevOps",
  "Java",
  "C++",
  "Mobile Development",
  "Web Development",
  "Software Development",
  "YAML",
  "React",
  "Android Development",
  "F#",
  "SQL",
  "GraphQL",
  "TypeScript",
  "JavaScript",
  "GitHub Actions",
];

const visibleCount = 3;
const currentIndex = ref(0);
const slideOffset = ref(0);
const isAnimating = ref(false);

const clampIndex = (value: number) => {
  const len = skillValues.length;
  return ((value % len) + len) % len;
};

const startSlide = (direction: "prev" | "next") => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  const delta = direction === "next" ? 1 : -1;
  slideOffset.value = direction === "next" ? -33.333 : 33.333;

  window.setTimeout(() => {
    currentIndex.value = clampIndex(currentIndex.value + delta);
    slideOffset.value = 0;
    isAnimating.value = false;
  }, 300);
};

const displayedSkills = computed(() =>
  Array.from({ length: visibleCount + 2 }).map((_, i) => {
    const index = clampIndex(currentIndex.value + i - 1);
    return skillValues[index];
  }),
);

const carouselStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  width: "100%",
};

const viewportStyle: CSSProperties = {
  overflow: "hidden",
  flex: "1 1 auto",
  minWidth: 0,
  maxWidth: "1000px",
};

const trackStyle = computed<CSSProperties>(() => ({
  display: "flex",
  gap: "1rem",
  alignItems: "stretch",
  transform: `translateX(${slideOffset.value}%)`,
  transition: isAnimating.value ? "transform 300ms ease" : "none",
}));

const itemStyle: CSSProperties = {
  flex: "0 0 33.333%",
  padding: "1rem",
  textAlign: "center",
  borderRadius: "0.5rem",
  background: "rgba(255,255,255,0.08)",
  maxHeight: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
</script>
