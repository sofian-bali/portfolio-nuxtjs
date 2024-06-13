<script setup>
import { ref } from 'vue';
import { format } from 'date-fns';

const foot = ref([]);
const footclub = ref([]);

const fetchFoot = async () => {
    try {
        const response = await fetch('https://api.sportsdata.io/v4/soccer/scores/json/SchedulesBasic/1/2024?key=8b56d1602a3d49b49c4ec5caba2682fd');
        const responseclub = await fetch('https://api.sportsdata.io/v4/soccer/scores/json/Teams/1?key=8b56d1602a3d49b49c4ec5caba2682fd');
        const clubdata = await responseclub.json();
        const data = await response.json();
        foot.value = data;
        footclub.value = clubdata;
        console.log("logo ", footclub.value);
        console.log(foot.value);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
}

fetchFoot();

function getClubLogo(teamId) {
    const club = footclub.value.find(club => club.TeamId === teamId);
    return club ? club.WikipediaLogoUrl : ''; // Retourne l'URL du logo du club ou une chaîne vide s'il n'est pas trouvé
}

const formatDate = (dateTime) => {
    return format(new Date(dateTime), 'dd/MM/yyyy HH:mm');
}
</script>

<template>
    <div class="container">
        <h1 class="title">
            Calendrier de la Saison 2023 - 2024 en premier league
        </h1>
        <div v-for="item in foot" :key="item.id" class="match-card">
            <div class="team-info">
                <img :src="getClubLogo(item.AwayTeamId)" alt="Away Team Logo" class="team-logo" />
                <div>
                    <p class="team-name">{{ item.AwayTeamName }}</p>
                    <p class="team-score">{{ item.AwayTeamScore }}</p>
                </div>
            </div>
            <div class="team-info">
                <img :src="getClubLogo(item.HomeTeamId)" alt="Home Team Logo" class="team-logo" />
                <div>
                    <p class="team-name">{{ item.HomeTeamName }}</p>
                    <p class="team-score">{{ item.HomeTeamScore }}</p>
                </div>
            </div>
            <p class="match-date">{{ formatDate(item.DateTime) }}</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0 auto;
        
    

    .title {
        color: #000;
        text-align: center;
        font-size: 2em;
        margin-bottom: 20px;
        width: 100%;
    }
    

    .match-card {
        display: flex;
        flex-wrap: wrap;
        width: 30%;
        background-color: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 15px;
        margin: 15px 0;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .team-info {
        color: #000;
        display: flex;
        align-items: center;
        margin: 15px 20px;
    }

    .team-logo {
        width: 60px;
        height: 60px;
        margin-right: 15px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .team-name {
        font-weight: bold;
        font-size: 1.2em;
    }

    .team-score {
        font-size: 1.1em;
        margin-top: 5px;
    }

    .match-date {
        border-top: 1px solid #e0e0e0;
        padding-top: 10px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        color: #666;
        font-style: italic;
    }
    }
</style>