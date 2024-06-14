<template>
    <div class="step-container">
        <h2>Étape 3</h2>
        <div class="form-group">
            <label for="address">Adresse:</label>
            <input type="text" id="address" v-model="formData.address" placeholder="Entrez votre adresse" />
        </div>
        
    </div>
</template>

<script>
export default {


    props: ['formData'],
    methods: {
        submitForm() {
            // Logique de soumission du formulaire
            this.$toast.success(`Adresse soumise: ${this.formData.address}`);
        }
    }
};
</script>

<style scoped>
.step-container {
    margin: 20px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    color: #000;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>