<template>
    <div class=LocationsList>
        <p v-for="location in locations"
            :key="location.id">{{ location.name }}</p>
    </div>
</template>

<script>

import { getAllLocations } from '@/services/api/Rick&MortyAPI';

export default {
    name : 'LocationsList',

    data(){
        return {
            locations : String
        }
    },

    created : function() {
        this.retrieveAllLocations()
    },

    methods :
    {
        async retrieveAllLocations()
        {
            this.locations = await getAllLocations()
            this.locations = this.locations["results"]
            console.log(this.locations)
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
    background : #FEF35A; 
    border-radius : 20px;
    color :  #0F0C23;

}

/* ######### MEDIA QUERIES ######### */

@media (max-width: 768px) {
    p {
    font-size: 30px; 
    margin-left: 2%; 
    margin-right: 2%; 
}
}

@media (max-width: 480px) {
    p {
    font-size: 20px; 
    margin-left: 2%; 
    margin-right: 2%;  
  }
}

</style>
