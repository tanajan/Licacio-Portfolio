<template>
  <section ref="techStackContainer" class="relative w-full h-[500px] bg-gray-100 pt-16 flex justify-center items-center">
    <h2 class="absolute top-0 text-4xl font-bold text-blue-700 text-center w-full">Tech Stack</h2>
    <div ref="canvasWrapper" class="relative w-full h-full flex justify-center items-center mt-20">
      <canvas ref="canvas" class="absolute"></canvas>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";

const techStackContainer = ref(null);
const canvas = ref(null);

const techStack = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" }
];

onMounted(() => {
  // Setup Three.js Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true });
  renderer.setSize(window.innerWidth, 500);
  techStackContainer.value.appendChild(renderer.domElement);

  camera.position.z = 3; // Adjust distance from the sphere

  // Sphere Geometry
  const radius = 1.5;
  const group = new THREE.Group();

  // Distribute tech stack items over the sphere
  techStack.forEach((tech, index) => {
    const theta = Math.acos(-1 + (2 * index) / techStack.length); // Polar angle
    const phi = Math.sqrt(techStack.length * Math.PI) * theta; // Azimuthal angle

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    // Create a sprite for each tech stack icon
    const texture = new THREE.TextureLoader().load(tech.icon);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.3, 0.3, 1); // Adjust size
    sprite.position.set(x, y, z);
    sprite.lookAt(camera.position); // Ensure the icon faces the camera

    group.add(sprite);
  });

  scene.add(group);

  function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.003; 
    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
  });
});
</script>

