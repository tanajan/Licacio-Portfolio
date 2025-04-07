<template>
  <div class="text-center py-4">
    <span class="text-2xl font-semibold text-blue-900">
      {{ displayedText }}<span class="blinking-cursor">|</span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Engineer"];
const displayedText = ref("");
const roleIndex = ref(0);
let isDeleting = false;
let charIndex = 0;

const typeEffect = () => {
  const currentRole = roles[roleIndex.value];

  if (!isDeleting) {
    displayedText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    displayedText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex.value = (roleIndex.value + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
};

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
.blinking-cursor {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
