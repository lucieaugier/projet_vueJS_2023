<template>
  <nav>
    <router-link to="/characters" class="h1">Characters</router-link>
    <router-link to="/locations" class="h1">Locations</router-link>
    <router-link to="/episodes" class="h1">Episodes</router-link>
  </nav>
</template>

<script>
export default {
    name : "WebsiteNavbar"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Sora&display=swap'); /* Besoin d'importer à chaque fois ou il faut importer juste dans le style de APP ?*/

nav{
    margin-top : 2em; 
    display : flex;
    justify-content: space-around;
    margin-bottom : 2em; 
}

.h1{
    font-family : 'Barlow Semi Condensed', sans-serif;
    font-weight: bold;
    font-size : 40px;
    color : #f5f5f5;
    text-decoration : none;
    position: relative;
}

.h1:hover {
    border-bottom : 8px solid rgba(254,243,89,1);
    margin-bottom: -8px;
}

@media screen and (max-width: 768px) {
  nav {
    flex-direction: column; 
    align-items: center; 
  }
  .h1 {
    font-size: 30px; 
    margin-bottom: 10px; 
  }
}

@media screen and (max-width: 480px) {
  nav {
    flex-direction: column; 
    align-items: center; 
  }
  .h1 {
    font-size: 25px; 
    margin-bottom: 10px; 
  }
}


</style>