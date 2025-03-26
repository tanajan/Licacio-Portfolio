<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 bg-blue-100 mt-15">
    <!-- Left Column: Contact Form -->
    <div class="space-y-4">
      <!-- Title with Email Icon -->
      <div class="flex items-center space-x-3 text-3xl font-bold text-gray-800">
        <i class="fas fa-envelope text-blue-600"></i>
        <span>Let's Get in Touch</span>
      </div>
      
      <!-- Contact Form -->
      <form class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>

    <!-- Right Column: Social Icons -->
    <div class="space-y-6">
      <h3 class="text-xl font-semibold text-gray-800">Connect with Me</h3>

      <!-- Social Links -->
      <div class="space-y-4">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/tana-jan/"
          target="_blank"
          class="flex items-center space-x-3 text-gray-800 hover:text-blue-600"
        >
          <i class="fab fa-linkedin text-2xl"></i>
          <span>LinkedIn</span>
        </a>
        <!-- GitHub -->
        <a
          href="https://github.com/tanajan"
          target="_blank"
          class="flex items-center space-x-3 text-gray-800 hover:text-blue-600"
        >
          <i class="fab fa-github text-2xl"></i>
          <span>GitHub</span>
        </a>
        <!-- WhatsApp -->
        <a
          href="hhttps://wa.me/66626479514"
          target="_blank"
          class="flex items-center space-x-3 text-gray-800 hover:text-green-600"
        >
          <i class="fab fa-whatsapp text-2xl text-green-600"></i>
          <span>WhatsApp</span>
        </a>
        <!-- Email -->
        <a
          href="mailto:tana.jan74@gmail.com"
          class="flex items-center space-x-3 text-gray-800 hover:text-blue-600"
        >
          <i class="fas fa-envelope text-2xl text-blue-600"></i>
          <span>Email</span>
        </a>
        <!-- Phone Number -->
        <a
          href="tel:+44 7787840124"
          class="flex items-center space-x-3 text-gray-800 hover:text-blue-600"
        >
          <i class="fas fa-phone text-2xl text-blue-600"></i>
          <span>Phone</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for now; it's a simple layout
</script>

<style scoped>
/* You can customize your icons or layout styles further */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
