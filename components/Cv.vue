<template>
    <div class="cv-components">
        <a class="pdf-preview" :href="pdfUrl" download="CV_Sofian_Bali.pdf">      
            <PdfPreview :pdfUrl="pdfUrl" />
        </a>

        <UButton size="sm" color="black" @click="downloadCV">Télécharger mon CV</UButton>

        <UButton size="sm" color="black" variant="outline" @click="shareCV">Partager mon CV</UButton>
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
            pdfUrl: '/CV_Sofian_Bali.pdf'
        };
    },
    methods: {
        downloadCV() {
            const link = document.createElement('a');
            link.href = this.pdfUrl;
            link.download = 'CV_Sofian_Bali.pdf';
            link.click();
        },
        shareCV() {
            const shareUrl = `/app-release.apk`;
            if (navigator.share) {
                navigator.share({
                    title: 'CV de Sofian Bali',
                    text: 'Découvrez mon CV',
                    url: shareUrl
                })
                .then(() => console.log('Partage du CV réussi !'))
                .catch((error) => console.error('Erreur lors du partage du CV :', error));
            } else {
                alert('La fonction de partage n\'est pas prise en charge sur ce navigateur. Voici le lien vers le CV : ' + shareUrl);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.cv-components {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 30%;

    .pdf-preview {
        height: 100%;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    }   
    .button{
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        text-align: center;

        .button:hover{
            background-color: #fff;
            color: #000;
        }
    }
}
</style>