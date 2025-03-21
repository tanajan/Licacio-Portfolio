<template>
    <div class="max-w-3xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">{{ project?.title }}</h1>
  
      <!-- Project Image/Video -->
      <div class="mb-6">
        <img v-if="project?.image" :src="project.image" :alt="project.title" class="w-full rounded-lg">
        <video v-if="project?.video" muted controls class="w-full rounded-lg">
          <source :src="project.video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
  
      <!-- Project Description -->
      <p class="text-gray-700">{{ project?.description }}</p>
  
      <!-- Tools Used -->
      <div class="mt-4">
        <h2 class="text-lg font-semibold">Tools Used:</h2>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="tool in project?.tools" :key="tool.name"
            class="px-3 py-1 text-sm font-medium rounded-full bg-gray-200">
            {{ tool.name }}
          </span>
        </div>
      </div>
  
      <!-- Back Button -->
      <router-link to="/projects" class="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Projects
      </router-link>
    </div>
  </template>
  
  <script>
  import projects from "./ProjectsData.js";
  
  export default {
    props: ['id'], // Get project ID from the URL
    computed: {
      project() {
        return projects.find(p => p.id.toString() === this.id); // Match project ID from data
      }
    }
  };
  </script>
  