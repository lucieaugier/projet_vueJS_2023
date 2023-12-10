<template>
    <footer>
        <p class = "line"></p>
        <p>Lucie Augier - IMAC 2023 </p>
    </footer>
</template>

<script>

export default {
    name : 'WebsiteFooter'
}
</script>


<style scoped>

footer {
    height : 15vh;
    font-family: "sora", sans-serif;
    color : #f5f5f5;
    display : flex; 
    flex-direction: column;
    justify-content: center;
}

p{
    margin : auto;
    font-size: 1.1rem;
}

.line{
    width: 90%;
    border-top: 1px solid #f5f5f5;
    margin-bottom : 0;
}

/* ######### MEDIA QUERIES ######### */

@media screen and (max-width: 768px) {
  footer {
    height: auto;
    padding: 20px; 
    text-align: center; 
  }
  .line {
    display: none; 
  }
}


@media screen and (max-width: 480px) {
  footer {
    height: auto; 
    padding: 20px;
    text-align: center; 
  }
  .line {
    display: none; 
  }
}

</style>
