<template>
    <div class=EpisodesList>
        <p v-for="(episode,index) in episodes"
            :key="episode.id">{{ "Ep " + (index+1) + ". " + episode.name }}</p>
    </div>
</template>

<script>

import { getAllEpisodes } from '@/services/api/Rick&MortyAPI';

export default {
    name : 'EpisodesList',

    data(){
        return {
            episodes : String
        }
    },

    created : function() {
        this.retrieveAllEpisodes()
    },

    methods :
    {
        async retrieveAllEpisodes()
        {
            this.episodes = await getAllEpisodes()
            this.episodes = this.episodes["results"]
            console.log(this.episodes)
        }

    }
}
</script>

<style scoped>

p {
    font-size : 36px;
    font-family : 'sora', sans-serif;
    color : #f5f5f5;
    text-align: left;
    margin-left : 6%;
    margin-right: 6%; 
    padding : 10px; 
}

p:hover{
    background : #9AD48A; 
    border-radius : 20px;
    color :  #0F0C23;

}

/* ######### MEDIA QUERIES ######### */

@media screen and (max-width: 768px) {
p {
    font-size: 30px; 
    margin-left: 2%; 
    margin-right: 2%; 
    
}
}

@media screen and (max-width: 480px) {
  p {
    font-size: 20px; 
    margin-left: 2%; 
    margin-right: 2%;  
  }
}


</style>
