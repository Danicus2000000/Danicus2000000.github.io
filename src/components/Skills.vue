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
                    :key="`${skill}-${index}`"
                    class="skill-carousel__item"
                    :class="{ 'skill-carousel__item--fly-in': skill === flyInSkill }"
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
const flyInSkill = ref<string | null>(null);

const clampIndex = (value: number) => {
  const len = skillValues.length;
  return ((value % len) + len) % len;
};

const startSlide = (direction: "prev" | "next") => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  const delta = direction === "next" ? 1 : -1;
  const incomingSkill =
    direction === "next"
      ? skillValues[clampIndex(currentIndex.value + visibleCount)]
      : skillValues[clampIndex(currentIndex.value + delta)];

  slideOffset.value = direction === "next" ? -33.333 : 33.333;

  window.setTimeout(() => {
    currentIndex.value = clampIndex(currentIndex.value + delta);
    flyInSkill.value = incomingSkill;
    slideOffset.value = 0;
    isAnimating.value = false;

    window.setTimeout(() => {
      flyInSkill.value = null;
    }, 440);
  }, 300);
};

const displayedSkills = computed(() =>
  Array.from({ length: visibleCount }).map((_, i) => {
    const index = clampIndex(currentIndex.value + i);
    return skillValues[index];
  }),
);

const carouselStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  width: "100%",
};

const viewportStyle: CSSProperties = {
  overflow: "hidden",
  flex: "0 0 auto",
  width: `${visibleCount * 220 + (visibleCount - 1) * 16}px`,
  minWidth: 0,
  margin: 0,
};

const trackStyle = computed<CSSProperties>(() => ({
  display: "flex",
  gap: "1rem",
  alignItems: "stretch",
  transform: `translateX(${slideOffset.value}%)`,
  transition: isAnimating.value ? "transform 300ms ease" : "none",
}));

const itemStyle: CSSProperties = {
  flex: "0 0 220px",
  width: "220px",
  boxSizing: "border-box",
  padding: "1rem",
  textAlign: "center",
  borderRadius: "0.5rem",
  border: "1px solid var(--line, rgba(221, 255, 238, 0.16))",
  background: "var(--skill-card, rgba(151, 238, 210, 0.08))",
  color: "var(--skill-box-text, var(--text))",
  minHeight: "80px",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
</script>
