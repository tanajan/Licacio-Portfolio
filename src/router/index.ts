import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Projects from '../components/Project.vue';
import Contact from '../components/Contact.vue';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails.vue';  

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/projects/:id', component: ProjectDetails, props: true }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
