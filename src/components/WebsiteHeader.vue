<template>
<header>
    <h1>Rick and morty characters</h1>
</header>
</template>


<script>
export default {
    name : 'WebsiteHeader'
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Sora&display=swap');
header {
    display : flex;
    justify-content : space-around; 
    background: rgb(54,180,186);
    background: linear-gradient(90deg, rgba(54,180,186,1) 0%, rgba(254,243,89,1) 100%);
}

h1 {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size : 50px; 
    font-weight: bold;
    text-transform: uppercase;
    color : #f5f5f5;
}

input {
    margin-top : 1.5em;
    border : none;
    border-radius : 25px ;
    width : 546px;
    height: 64px;
}

input[type=text] {
    padding-left : 20px;
    background : #f5f5f5;
    font-size : 20px; 
    font-family: 'nunito', sans-serif;
    font-weight: 800;
    color : #0F0C23;
}

/* ######### MEDIA QUERIES ######### */

@media screen and (max-width: 768px) {
  header {
    flex-direction: column; 
    align-items: center; 
    padding: 20px;
  }
  h1 {
    font-size: 40px; 
    margin-bottom: 20px;
  }
  input {
    width: 100%; 
    max-width: 400px; 
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 30px; 
  }
  input {
    width: 100%; 
    max-width: 300px; 
    margin-bottom: 10px; 
  }
}



</style>