<template>
    <div>
      <client-only>
        <canvas ref="canvas"></canvas>
      </client-only>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import * as pdfjsLib from 'pdfjs-dist';
  
  // Configure the worker
  if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }
  
  const canvas = ref(null);
  const pdfUrl = '/cv.pdf'; // Remplacez par l'URL de votre PDF
  
  onMounted(async () => {
    try {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
  
      const scale = 0.75;
      const viewport = page.getViewport({ scale });
  
      const canvasElement = canvas.value;
      const context = canvasElement.getContext('2d');
      canvasElement.height = viewport.height;
      canvasElement.width = viewport.width;
  
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
  
      const renderTask = page.render(renderContext);
      await renderTask.promise;
      console.log('Page rendered');
    } catch (error) {
      console.error('Error rendering PDF:', error);
    }
  });
  </script>
  
  <style scoped>
  canvas {
    margin-bottom: 20px;
    width: 100%;
}
  </style>
  