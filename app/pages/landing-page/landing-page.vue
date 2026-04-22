<script setup lang="ts">
// import Footer from '~/components/footer.vue';
// import Header from '../components/header.vue';

</script>

<template>
  <!--Navigation Bar-->
  <Header />

  <!--Hero Section-->
    <LandingPageHeroSection />

  <!--01 Workflow Visualization-->
  <section id="how">
    <LandingPageWorkflowVisualization />
  </section>

  <!--02 Behind The Scenes (Features)-->
  <section id="feat">
    <LandingPageFeatures />
  </section>

  <!--03 Pricing-->
  <section id="pricing">
    <LandingPagePricing />
  </section>

  <!--04 Testimonials-->
    <LandingPageTestimonials />

  <!--Pre-Footer CTA-->
    <LandingPagePreFooterCTA />

  <!--Footer-->
    <Footer />
  
</template>