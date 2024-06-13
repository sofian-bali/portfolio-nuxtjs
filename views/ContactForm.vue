<template>
  <div>
    <component :is="currentStepComponent"></component>
  </div>
</template>

<script>
import Step1 from '~/components/Step1.vue'
import Step2 from '~/components/Step2.vue'
// Importez d'autres étapes ici

export default {
  computed: {
    currentStepComponent() {
      switch (this.$store.state.currentStep) {
        case 1:
          return Step1
        case 2:
          return Step2
        // Ajoutez d'autres cas ici
        default:
          return Step1
      }
    }
  }
}
</script>
