<template>
    <div class="cv-components">
        <a class="pdf-preview" :href="pdfUrl" download="CV_Sofian_Bali.pdf">      
        <PdfPreview :pdfUrl="pdfUrl" />
      Télécharger mon CV</a>
    </div>
  </template>
  
  <script>
  import PdfPreview from '~/components/PdfPreview.vue'; 
  
  export default {
    components: {
      PdfPreview
    },
    data() {
      return {
        pdfUrl: '/cv.pdf',
    };
    }
  };
  
  </script>
  
  <style scoped lang="scss">
    .cv-components{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 30%;

        .pdf-preview {

            height: 100%;
            background-color: #000;
            color: #fff;
            text-align: center;
            padding: 10px;
            border-radius: 5px;
        }   
    }
</style>