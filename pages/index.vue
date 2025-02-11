
<script setup>

import Header from '~/layouts/Header.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Matias - Nuxt 3 Personal Portfolio Template",
})


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}


</script>


<template>
  <Header />
  <SliderTextSlider />
  <About />
  <SliderTextSliderTwo />
  <Aword />
  <Project />
  <Metting />
  <Service />
  <Process />
  <Testimonial />
  <Blog />
  <Footer />
</template>
 