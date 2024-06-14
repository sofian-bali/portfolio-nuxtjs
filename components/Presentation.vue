<template>
    <div class="presentation">
      <figure>
        <img src="@/assets/bitmoji.jpeg" alt="Sofian Bali" />
        <figcaption></figcaption>
      </figure>
      <div class="description">
        <h1>Sofian Bali</h1>
        <div class="typing-container">
          <p ref="text" class="typing-text">{{ staticText }} {{ displayText }}</p>
        </div>
           <div class="social-links">
          <a href="https://www.linkedin.com/in/sofian-bali" target="_blank">LinkedIn</a>
          <a href="https://github.com/sofian-bali" target="_blank">GitHub</a>
          <!-- Ajoutez d'autres liens vers vos profils de réseaux sociaux ici -->
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  h1{
    font-size: 30px;
    font-weight: bold;
  }
  .presentation {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .description {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }
  figure {
    margin: auto 0;
   
  }
  
  figure img {
    width: 200px;
    border-radius: 50%;
  }
  
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  
  .typing-text {
    display: inline-block;
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    letter-spacing: 0.15em;
    animation: blink 0.75s step-end infinite;
    font-size: 30px;
  }

  .typing-container {
    width: 400px;
  }

  .social-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }
  </style>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const staticText = "Je suis";
      const words = ["Développeur Full Stack", "Développeur Mobile", "Curieux", "Motivé", "Autonome", "Adaptable"];
      const displayText = ref("");
      const currentWordIndex = ref(0);
      let isDeleting = false;
      let index = 0;
  
      const typeWriter = () => {
        const word = words[currentWordIndex.value];
  
        if (!isDeleting && index < word.length) {
          displayText.value = word.substring(0, index + 1);
          index++;
          setTimeout(typeWriter, 100);
        } else if (isDeleting && index > 0) {
          displayText.value = word.substring(0, index - 1);
          index--;
          setTimeout(typeWriter, 50);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
            currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
            if (currentWordIndex.value === 0) {
              setTimeout(() => {
                currentWordIndex.value = 0; // Réinitialiser l'index pour recommencer
                isDeleting = false;
                setTimeout(typeWriter, 500);
              }, 2000); // Attendre avant de recommencer l'animation
              return;
            }
          }
          setTimeout(typeWriter, 500);
        }
      };
  
      onMounted(() => {
        typeWriter();
      });
  
      return {
        staticText,
        displayText
      };
    }
  };
  </script>
  