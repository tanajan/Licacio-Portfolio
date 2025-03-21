<template>
  <div>
    <h2 class="text-4xl font-bold text-center mb-8 text-blue-700">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in displayedProjects" :key="project.id" class="bg-white shadow-lg rounded-lg overflow-hidden">

        <!-- Project Image/Video -->
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          <video v-if="project.video" muted controls class="h-full w-full">
            <source :src="project.video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-semibold text-gray-800">{{ project.title }}</h3>
            <span class="px-3 py-1 text-sm font-semibold rounded-full" :class="statusClass(project.status)">
              {{ project.status }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-sm">{{ project.description }}</p>

          <!-- Tools Used -->
          <div v-if="project.tools && project.tools.length > 0" class="mt-4 flex flex-wrap gap-2">
            <span v-for="tool in project.tools" :key="tool.name"
              class="px-3 py-1 text-sm font-medium rounded-full flex items-center space-x-2"
              :class="toolClass(tool.name)">
              <img :src="getDeviconUrl(tool.iconname)" :alt="tool.iconname" class="w-6 h-6">
              <span>{{ tool.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- "See More" button (Only on homepage) -->
    <div v-if="!isProjectsPage" class="flex justify-center mt-6">
      <router-link to="/projects">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          See More
        </button>
      </router-link>
    </div>

    <!-- "Back" button (Only on /projects page) -->
    <div v-if="isProjectsPage" class="flex justify-center mt-6">
      <router-link to="/">
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg">
          Back
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const projects = ref([
  { id: 1, title: "Raycity Extreme", status: "Completed", image: "/project/RaycityExtreme.png", description: "Launched a web application featuring Payment System, Daily Login, and Item Code Management.", tools: [{ iconname: "React", name: "React" }, { iconname: "nodejs", name: "Node JS" }, { iconname: "microsoftsqlserver", name: "SQL Server" }] },
  { id: 2, title: "Avalon Online Game", status: "Completed", image: "/project/AvalonOnline.png", description: "Developing a web-based Avalon social deduction game with real-time multiplayer interaction.", tools: [{ iconname: "socketio", name: "Socket.IO" }, { iconname: "JavaScript", name: "JavaScript" }, { iconname: "Express", name: "Express" }] },
  { id: 3, title: "AU Sport Booking System", status: "Completed", image: "/project/AUSportBooking.png", description: "", tools: [{ iconname: "React", name: "React" }, { iconname: "nodejs", name: "Node.js" }, { iconname: "mongodb", name: "MongoDB" }, { iconname: "express", name: "Express" }] },
  { id: 4, title: "Valentino", status: "Completed", video: "/project/Valentino.mp4", description: "A special Valentine's project using HTML, CSS, and JavaScript animations.", tools: [{ iconname: "html5", name: "HTML" }, { iconname: "css3", name: "CSS" }, { iconname: "JavaScript", name: "Javascript" }] },
  { id: 5, title: "ReunThai Landing Page", status: "On progress", image: "/project/RuenThai.png", description: "A fully responsive landing page for Ruenthai Massage Birmingham.", tools: [{ iconname: "vuejs", name: "Vue.js" }, { iconname: "vite", name: "Vite" }, { iconname: "bootstrap", name: "Bootstrap" }] },
  { id: 6, title: "Java Socket Communication", status: "Completed", image: "/project/JavaSocketCom.png", description: "A Java program enabling users to communicate via a server. After logging in, the client sends a hashed user ID to check for incoming messages. Users can send encrypted messages using RSA and digital signatures, which the server verifies and stores for future delivery.", tools: [{ iconname: "java", name: "Java" }, { iconname: "socketio", name: "Socket.IO" }] },
  { id: 7, title: "Pet Window Form", status: "Completed", image: "/project/PetWinForm.png", description: "Developed a Windows Forms application in C#, gaining hands-on experience with desktop development. This project enhanced my understanding of CRUD operations, tool limitations, and UI design within Visual Studio, expanding my skills beyond web development.", tools: [{ iconname: "csharp", name: "C#" }, { iconname: "mongodb", name: "MongoDB" }] }
]);

// Route handling
const route = useRoute();
const isProjectsPage = computed(() => route.path === "/projects");

// Show only first 6 projects on homepage
const displayedProjects = computed(() => (isProjectsPage.value ? projects.value : projects.value.slice(0, 6)));

// Dynamic status tag colors
const statusClass = (status) => {
  switch (status) {
    case "Completed": return "bg-green-100 text-green-700";
    case "In Progress": return "bg-yellow-100 text-yellow-700";
    case "Planning": return "bg-blue-100 text-blue-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

// Devicon URL function
const getDeviconUrl = (toolName) => {
  const formattedName = toolName.toLowerCase().replace(/\s+/g, "");
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${formattedName}/${formattedName}-original.svg`;
};

// Dynamic tool tag colors
const toolClass = (tool) => {
  const colors = {
    React: "bg-blue-100 text-blue-700",
    "Node.js": "bg-green-100 text-green-700",
    "SQL Server": "bg-red-100 text-red-700",
    "Socket.IO": "bg-purple-100 text-purple-700",
    JavaScript: "bg-yellow-100 text-yellow-700",
    Express: "bg-gray-100 text-gray-700",
    "Vue.js": "bg-green-200 text-green-900",
    Firebase: "bg-orange-100 text-orange-700",
  };
  return colors[tool] || "bg-gray-100 text-gray-700";
};
</script>
