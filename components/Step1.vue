<template>
    <div class="step-container">
        <h2>Étape 1</h2>
        <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Entrez votre nom" />
        </div>
        <div class="form-group">
            <label for="nickname">Prénom</label>
            <input type="text" id="nickname" v-model="formData.nickname" placeholder="Entrez votre prénom" />
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    props: ['formData'],
    setup() {
        const state = reactive({
            email: undefined,
            password: undefined
        });

        const validate = (state) => {
            const errors = [];
            if (!state.email) errors.push({ path: 'email', message: 'Champ requis' });
            if (!state.password) errors.push({ path: 'password', message: 'Champ requis' });
            return errors;
        };

        const onSubmit = (event) => {
            // Traiter les données
            console.log(event.data);
        };

        const onError = (event) => {
            const element = document.getElementById(event.errors[0].id);
            element?.focus();
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        return { state, validate, onSubmit, onError };
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
    color: #000;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;

}
</style>