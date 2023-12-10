  <template>

<router-link :to="'/characters/' + id" class="link">
  <div class="characterCard">

    <img :src="pictureURL" width="150" height="150" class="picture">
    <h2 class="name">{{name}}</h2>
    <p class="species">{{species}}</p>
    
  </div>
</router-link>


  </template>
  
  <script>  

  export default {
    name: 'CharacterCard',
    props: {
      pictureURL : String,
      name : String,
      species : String,
      id: Number
    },
    
  }

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Sora&display=swap');

  .characterCard {
    border : 1px solid rgb(54,180,186);
    border-radius: 25px; 
    width: 150px;
    height : 300px;
  }

  p{
    font-family : "Sora", sans-serif; 
    font-size : 15px; 
    color : #f5f5f5; 
  }

  h2 {
    text-transform: uppercase;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color : #f5f5f5;
    padding-left : 2%;
    padding-right : 2%;
  }

  .picture{
    border-radius : 25px;
  }

/* HOVERS */

.characterCard:hover{
  background-color : rgb(54,180,186);
}

.characterCard:hover  h2 {
  color : #0F0C23;
}

.characterCard:hover p {
  color : #0F0C23;
}

.link {
  text-decoration: none;
}

/* ######### MEDIA QUERIES ######### */

@media screen and (max-width: 768px) {
  .characterCard {
    width: 150px; 
  }
  h2 {
    font-size: 18px; 
    word-wrap: break-word;
  }
}


@media screen and (max-width: 480px) {
  .characterCard {
    width: 120px; 
    height: auto; 
  }
  h2 {
    font-size: 16px; 
    word-wrap: break-word;
  }
  .picture {
    width: 120px;
    height: 120px;
  }
}

</style>
  