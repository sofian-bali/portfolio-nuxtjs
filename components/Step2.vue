<template>
    <div class="step-container">
        <h2>Étape 2</h2>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Entrez votre adresse email" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['formData'],
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
</style>