<template>
  <section id="home" class="banner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-xl-7">
          <div class="txt-rotate-bounding-box">
            <div class="animate__animated animate__fadeIn">
              <span class="tagline">Welcome to my Portfolio</span>
              <h1>
                <span class="txt-rotate" data-period="1000">
                  Hi I'm Dan<span class="wrap">{{ text }}</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const loopNum = ref(0);
const isDeleting = ref(false);
const text = ref("");
const delta = ref(300 - Math.random() * 100);
const period = 2000;
let timeoutId: number | undefined;

const toRotate = [
  ", Hello World!",
  ", getting more green tea",
  ", a Software Engineer",
  ", I'm trying my best",
  ", Learning as I go",
  ", I'm never giving up",
  ", a problem solver",
  ", a little bit silly",
  ", probably sleepy",
  ", it'll all be fine!",
  ", a spanner"
];


const tick = () => {
  const i = loopNum.value % toRotate.length;
  const fullText = toRotate[i];
  const updatedText = isDeleting.value
    ? fullText.substring(0, text.value.length - 1)
    : fullText.substring(0, text.value.length + 1);

  text.value = updatedText;

  if (isDeleting.value) {
    delta.value = delta.value / 2;
  }

  if (!isDeleting.value && updatedText === fullText) {
    isDeleting.value = true;
    delta.value = period;
  } else if (isDeleting.value && updatedText === "") {
    isDeleting.value = false;
    loopNum.value += 1;
    delta.value = 500;
  }

  timeoutId = window.setTimeout(tick, delta.value);
};

onMounted(() => {
  timeoutId = window.setTimeout(tick, delta.value);
});

onUnmounted(() => {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
  }
});
</script>
