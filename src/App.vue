<script setup>
import './App.css';
import { ref } from 'vue';
import { useRoute } from 'vue-router';  // To get the current route for switching modes
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Project.vue';
import Contact from './components/Contact.vue';
import TechStacks from './components/TechStacks.vue';

const sections = [
  { id: 'home', name: 'Home', component: Home },
  { id: 'about', name: 'About', component: About },
  { id: 'projects', name: 'Projects', component: Projects },
  { id: 'contact', name: 'Contact', component: Contact }
];

const isSidebarOpen = ref(false);

// Get current route to determine which mode is active
const route = useRoute();
</script>

<template>
  <div class="flex min-h-screen bg-gray-50 text-gray-900">
    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 h-full bg-blue-900 text-white w-64 p-6 hidden md:flex flex-col justify-between shadow-lg">

      <!-- Navigation -->
      <nav class="flex flex-col space-y-4">
        <router-link v-for="section in sections" :key="section.id" :to="`#${section.id}`"
          class="text-lg relative overflow-hidden group">
          <span class="transition-colors group-hover:text-blue-500">{{ section.name }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
        </router-link>
      </nav>


      <!-- Contact Section -->
      <div class="mt-auto">
        <!-- Email & Phone -->
        <div class="mb-4 text-sm text-gray-300">
          <p class="mb-1">📧 <a href="mailto:tana@example.com" class="hover:text-white">tana.jan74@gmail.com</a></p>
          <p>📞 <a href="tel:+1234567890" class="hover:text-white">+44 7787840124</a></p>
        </div>

        <!-- Social Icons -->
        <div class="flex justify-center space-x-4">
          <!-- LinkedIn Icon -->
          <a href="https://www.linkedin.com/in/tana-jan/" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <!-- Whatsapp -->
          <a href="https://wa.me/66626479514" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-whatsapp text-2xl"></i>
          </a>
          <!-- GitHub Icon -->
          <a href="https://github.com/tanajan" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>

    </aside>


    <!-- Mobile Navbar -->
    <header class="fixed top-0 left-0 w-full bg-blue-700 text-white p-4 shadow-md flex justify-between md:hidden">
      <h1 class="text-xl font-bold">Tana Jantayavichit</h1>
      <button @click="isSidebarOpen = !isSidebarOpen" class="text-white text-xl">☰</button>
    </header>

    <!-- Mobile Sidebar -->
    <aside v-if="isSidebarOpen"
      class="fixed top-0 left-0 w-64 h-full bg-blue-700 text-white p-6 flex flex-col space-y-6 shadow-lg md:hidden">
      <button @click="isSidebarOpen = false" class="text-white text-xl self-end">✖</button>
      <nav class="flex flex-col space-y-4">
        <router-link v-for="section in sections" :key="section.id" :to="`#${section.id}`"
          class="text-lg hover:text-gray-300 transition">
          {{ section.name }}
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow ml-0 md:ml-64 p-8 space-y-16 mt-16">

      <section v-if="route.path === '/'">
        <Home />
        <About />
        <TechStacks />
        <Projects />
        <Contact />
      </section>


      <section v-if="route.path === '/projects'">
        <Projects />
      </section>

      <!-- Mode 3: Project Detail Mode -->
      <section v-if="route.path.startsWith('/projects/')">
        <ProjectDetails />
      </section>
    </main>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

main {
  display: flex;
  flex-direction: column;
}

section {
  padding: 20px;
  margin-bottom: 40px;
}
</style>
