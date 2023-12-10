<template>
  <!--il faut mettre des div ici ou bien on peut mettre des header etc ? -->
    <WebsiteHeader/>
    <WebsiteNavbar/>
    
    <main>
      <router-view></router-view> 
    </main>
      
    
    <WebsiteFooter/>
    

</template>

<script>
import WebsiteHeader from './components/WebsiteHeader.vue'
import WebsiteFooter from './components/WebsiteFooter.vue'
import WebsiteNavbar from './components/WebsiteNavbar.vue'



export default {
  name: 'App',
  components: {
    WebsiteHeader, WebsiteFooter, WebsiteNavbar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Sora&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: #2c3e50; 
  width : 100%; 
  height: 100%;
  margin : 0;
}

body {
  margin : 0; 
  display: flex;
  flex-direction: column;
  width : 100%; 
  height: 100%;
  background-color : #0F0C23; 

}

.main {
  width: 100%;
  height: auto;
  position: relative;
}

.header {
  height : 50%;
}


</style>
