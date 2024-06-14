<template>
  <div>

    <component :is="currentStepComponent" @next="nextStep" @prev="prevStep" @submit="submitForm" :formData="formData" />
    <div>
      <button @click="prevStep" :disabled="currentStep === 0">Previous</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Next</button>
      <button @click="submitForm" v-if="currentStep === steps.length - 1">Submit</button>
    </div>
  </div>
</template>

<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

export default {
  components: {
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      currentStep: 0,
      formData: {
        // Initial form data
        name: '',
        email: '',
        address: '',
        // add more fields as needed
      },
      steps: ['Step1', 'Step2', 'Step3'],
    };
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep];
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData);

    },
  },
};
</script>

<style scoped>
/* Style du conteneur du formulaire */
form {
  margin: 20px;
  padding: 20px;
  border: 2px solid #333; /* Couleur de bordure plus sombre */
  border-radius: 10px;
  background-color: #f8f8f8; /* Couleur de fond plus claire */
}

/* Style des boutons du formulaire */
button {
  padding: 12px 24px;
  margin-right: 10px;
  background-color: #4CAF50; /* Couleur verte */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Style des champs de formulaire */
input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Style des étapes du formulaire */
.step {
  display: none;
}

.step.active {
  display: block;
}
</style>