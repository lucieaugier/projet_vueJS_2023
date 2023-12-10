<template>
	<div class="charactersGallery">

		<div class="gallery-options">
				
				<label for="characterSort">Trier par : </label>
				<select v-model="characterSortType" id="characterSort">
					<option value="AZName">Noms de A à Z</option>
					<option value="ZAName">Noms de Z à A</option>
				</select>
				<input type="text" v-model="search" placeholder="Looking for someone ?">
				<button v-if="search" @click="cleanSearch">X</button>
		</div>

		<div class = "gallery">
		
		<CharacterCard 
			v-for="character in charactersOrganizedData"
			:key="character.id" 
			:name="character.name" 
			:species="character.species" 
			:pictureURL="character.image"
			:id="character.id"/>
		</div>
	</div>
</template>	



<script>
import { getAllCharacters } from '@/services/api/Rick&MortyAPI'
import CharacterCard from './CharacterCard.vue'


export default {
name: 'CharactersGallery',


watch : {
	search : function(newSearch) {
		localStorage.setItem("search", newSearch)
	},

	characterSortType : function(newCharacterSortType) {
		localStorage.setItem("characterSortType", newCharacterSortType)
	}
},
computed : {
	charactersOrganizedData : function () { 


		const reversed = ["ZAName"].includes(this.characterSortType)

		//barre de recherche
		const filterFunc = (a) => a["name"].toLowerCase().includes(this.search.toLowerCase())

		//va chercher les personnages
		let data = this.allCharacters.filter(filterFunc)

		//tri par ordre alphabétique
		if (this.characterSortType == "AZName")
		data.sort(function (a,b) {return a["name"].localeCompare(b["name"]);
		})

		if (reversed) 
			{
				data = data.sort(function (a,b) {return a["name"].localeCompare(b["name"]) })
				data.reverse()
			}
		return data
	}

},
components: {
	CharacterCard,
	// charactersData
}, 

data() {
	return {
		allCharacters:[],
		search : localStorage.getItem("search") || "",
		characterSortType: localStorage.getItem("characterSortType")||"AZName"
	}
},

created : function() {
	this.retrieveAllCharacters()
	//const id = this.$route.params.id;
},

methods :
{
	async retrieveAllCharacters() {
		for (let i=1; i<42; i++)
		{
			let newCharacters = await getAllCharacters(i)
			newCharacters = newCharacters["results"]
			for (let j=0; j<20; j++)
			{
				console.log(newCharacters[j].id);
				this.allCharacters.push(newCharacters[j])
			}
		}
	},

	cleanSearch : function() {
		this.search = ""
	},
}
}
</script>







<style>
.test {
	color: white;
}
.gallery {
	margin-left : 5%; 
	margin-right : 5%;
	display : flex; 
	justify-content: space-around;
	flex-wrap : wrap;
	gap : 80px;
}

label {
	font-family : "sora", sans-serif;
	color : #f5f5f5;
	font-size : 20px; 
}


.gallery-options {
	margin-left : 6%;
	margin-bottom : 2%;
	display : flex;	
	gap : 40px;
}

select {
	border-radius : 25px;
}

.link {
  display: flex;
  text-decoration: none;
  justify-content: flex-start;
  flex-wrap : wrap;
  gap : 100px;
}

.gallery-options {
  margin-left: 6%;
  margin-bottom: 2%;
  display: flex;
  gap: 40px;
  align-items: center; /* Aligner les éléments verticalement au centre */
}

label {
  font-family: "sora", sans-serif;
  color: #f5f5f5;
  font-size: 20px;
}

select,
input {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  outline: none;
}


/* ######### MEDIA QUERIES ######### */

@media screen and (max-width: 768px) {
  .gallery {
    gap: 50px;  
	justify-content:center;
	}

  .gallery-options {
	row-gap : 5px;
	justify-content:center;
	margin-bottom : 20px; 
	}
}	

@media screen and (max-width: 480px) {
  .gallery {
    gap: 20px; 
	justify-content : center;
	}

  .gallery-options {
	justify-content: center;
    flex-direction: column;
    align-items: flex-start; 
    margin-left: 3%; 
}
}

</style>