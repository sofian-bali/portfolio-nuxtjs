<template>
  <div>
    <div class="about">
      <Presentation/>
      <Cv/>
    </div>
    <Technologie/>    
  </div>
</template>

<style>
.about{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>