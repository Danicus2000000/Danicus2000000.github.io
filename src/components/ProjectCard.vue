<template>
  <div class="col-12 col-sm-6 col-md-3 proj-colbx">
    <a :href="props.urlJump" target="_blank" rel="noreferrer noopener">
      <div class="proj-imgbx">
        <img :src="props.imgUrl" alt="Project image" />
        <div class="proj-txtx">
          <h4>{{ props.title }}</h4>
          <span>{{ props.description }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imgUrl: string;
  urlJump: string;
}>();
</script>
