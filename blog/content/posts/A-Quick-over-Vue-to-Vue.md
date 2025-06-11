+++
date = '2025-06-11T01:14:17+01:00'
draft = false
title = 'A Quick Over-Vue to Vue'
category = ["Frontend"]
+++

### What is Vue?

Vue is a progressive JavaScript framework for building user interfaces, first released in 2014. Vue is designed to be incrementally adoptable, meaning you can use as much or as little of it as you need, from enhancing a single page to even more.

### The Need for Vue

Modern web development often requires dynamic, interactive interfaces. Before frameworks like Vue, developers relied on vanilla JavaScript or jQuery, which could quickly become unwieldy as applications grew. Vue addresses these challenges by providing a reactive data-binding system, component-based architecture, and a declarative approach to UI development, making code more maintainable and scalable.

### Key Features and Concepts in Vue

- **Reactivity**: Vue uses a reactive data system. When data changes, the UI updates automatically. For example, using `ref` and `computed` from the Composition API allows you to create reactive state and derived values.
- **Component-Based**: Everything in Vue is a component, from small buttons to entire pages. Components encapsulate their logic, template, and styles, promoting reusability and separation of concerns.
- **Single File Components (SFCs)**: Vue components are typically written in `.vue` files, which combine HTML, JavaScript/TypeScript, and CSS in a single file for better organization.
- **Declarative Templates**: Vue templates use a syntax similar to HTML, making it easy to describe the UI structure. Data binding and event handling are straightforward with `{{ }}` and `@event` syntax.
- **Ecosystem and Tooling**: Vue integrates well with modern tooling like Vite for fast development, TypeScript for type safety, and ESLint/Prettier for code quality.

#### Example: A Simple Timer Component

Below is a simplified example from this project, showing a timer component using the Composition API:

```vue
<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

const count = ref(0);
const computedCount = computed(
  () => "The current amount of time 5 seconds has elapsed is: " + count.value
);

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

onMounted(() => {
  setInterval(() => {
    count.value += 1;
  }, 5000);
});
</script>

<template>
  <div>Hello I'm in Vue</div>
  <div>{{ computedCount }}</div>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
  <button @click="count = 0">Reset</button>
</template>
```

### Pros and Cons of Vue

**Pros:**

- Easy to learn
- Excellent documentation and community support
- Flexible: can be used for small widgets or large SPAs
- Strong TypeScript support and modern tooling

**Cons:**

- Smaller ecosystem compared to React
- Some advanced patterns may require additional libraries
- Unorganised component structures can lead to difficult to navigate solutions with improper folder usage

### Conclusion

Vue offers a gentle learning curve and a powerful set of features for building modern web applications. Its reactivity, component system, and tooling make it a great choice for both beginners and experienced developers. If you’re looking to explore frontend frameworks, Vue is highly recommended—try building a small project to experience its simplicity and power first hand!
