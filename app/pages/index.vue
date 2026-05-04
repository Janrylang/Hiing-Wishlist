<script setup lang="ts">
import NavBar from '~/components/landing-page/NavBar.vue';
// import Header from '../components/header.vue';

</script>

<template>
  <!--Navigation Bar-->
  <NavBar />

  <!--Hero Section-->
    <LandingPageMainSection />

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

  <!--Pre-Footer CTA-->
    <LandingPagePreFooterCTA />

  <!--Footer-->
    <Footer />
  
</template>