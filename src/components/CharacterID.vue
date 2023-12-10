<template>

    <div class="IDcard"> 
        
        <img class="picture" v-bind:src='singleCharacter.image' width="555" height="555">
        
        <div class = "textAndStatus">
            <div class="text">  
                <h2 class ="name">{{singleCharacter.name}}</h2>
                <p class="staticCharacteristics">Species : </p>
                <p class="dynamicCharacteristics species">{{singleCharacter.species}}</p>
                <p class="staticCharacteristics">Gender : </p>
                <p class="dynamicCharacteristics gender">{{singleCharacter.gender}}</p>
                <p class="staticCharacteristics">Type : </p>
                <p class="dynamicCharacteristics type">{{singleCharacter.type}}</p>
                <p class="staticCharacteristics">Geographic origin : </p>
                <p class="dynamicCharacteristics origin">{{originName}}</p>
                <p class="staticCharacteristics">Last known location : </p>
                <p class="dynamicCharacteristics location">{{locationName}}</p>
                <p class="staticCharacteristics">First seen in : </p>    
                <p class="dynamicCharacteristics episode">{{episodeName}}</p>
            </div>

            <div class="status">
                <p class="statusName">{{singleCharacter.status}}</p>
                <div class="statusCircle" v-bind:style="{background : this.color}">
            </div>
        </div>

        </div>

        

    </div>

</template>

<script>

import {getSingleCharacter, getSingleEpisodeDataByURL} from '@/services/api/Rick&MortyAPI'

export default {
    name : 'CharacterID',

    data() {
        return { 
            singleCharacter: {},
            locationName : String,
            episodeName : String,
            originName : String,
            color : String,
        }
    },

    created : function() {
        this.retrieveSingleCharacterData()
        this.retrieveFirstEpisodeApparition()
        this.changestatusCircleColor()
    },

    methods:
    {

        async retrieveSingleCharacterData() {
            const id = this.$route.params.id;
            this.singleCharacter = await getSingleCharacter(id)
            this.locationName = this.singleCharacter.location["name"]
            this.originName = this.singleCharacter.origin["name"]
        },

        async retrieveFirstEpisodeApparition()
        {
            const id = this.$route.params.id;
            this.singleCharacter = await getSingleCharacter(id)
            const episodeURL = this.singleCharacter.episode[0];
            console.log("episode : ", episodeURL)
            const episodeData = await getSingleEpisodeDataByURL(episodeURL)
            this.episodeName = episodeData.name
        },

        async changestatusCircleColor()
        {
            const id = this.$route.params.id;
            this.singleCharacter = await getSingleCharacter(id)
            const status = this.singleCharacter.status;
            console.log("status : ", status)
            if (status == "Alive")
            {
                this.color = "#27A63F"
            }
            else if (status == "Dead")
            {
                this.color = "#C50707"
            }
            else 
            {
                this.color = "#FEF35A"
            }
        }
    }
    }
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Sora&display=swap');


p{
    font-family: 'sora', sans-serif;
    line-height : 2px;
    text-align : left;
}

h2.name{
    font-family: 'barlow semi condensed', sans-serif;
    font-size : 50px; 
    text-transform: uppercase;
    color: #f5f5f5;
}

.IDcard {
    margin-left : 6%;
    margin-right :6%;
    border : 1px solid rgb(54,180,186);
    border-radius: 25px; 
    display : flex;
    align-items : center;
    gap : 3%;
}

.staticCharacteristics {
    color : rgb(54,180,186);
}

.dynamicCharacteristics {
    font-size : 30px;
    color: #f5f5f5;
    display: flex;
    align-items: center;
}

.picture{
    border-radius : 25px;
}

.text {
    height : 555px;
}

.status {
    display: flex; 
    align-items: center; 
}

.statusName {
    margin-top : 80px; 
    font-size : 30px;
    color: #f5f5f5;
    margin-right: 20px; 
}

.statusCircle {
    margin-top : 50px; 
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.textAndStatus {
  display: flex;
  align-items: flex-start;
}



/* ######### MEDIA QUERIES ######### */

@media (max-width: 768px) {
  .IDcard {
    flex-direction: column; 
  }
  
  .textAndStatus {
    flex-direction: column; 
  }
  
  .text {
    height: auto;
  }
  
  .status {
    margin-top: 20px; 
  }

  .picture {
    width:673px; 
    height: 673px; 
  }
}


@media (max-width: 480px) {
  .IDcard {
    /* margin-left: 3%; Réduire la marge gauche */
    /* margin-right: 3%; Réduire la marge droite */
  }
  h2.name {
    font-size: 40px; 
  }
  .staticCharacteristics {
    font-size: 12px; 
  }
  .dynamicCharacteristics {
    font-size: 20px; 
  }
  .statusName {
    font-size: 20px; 
    margin-top: 40px;
  }
  .statusCircle {
    width: 20px; 
    height: 20px;
    margin-top: 30px; 
  }

  .picture {
    width: 280px; 
    height: 280px; 
  }
}


</style>