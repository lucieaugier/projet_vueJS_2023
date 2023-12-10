const getAllCharacters = async function(pageNumber) {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=" + pageNumber )
    if (response.status == 200) {
    return response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getAllCharacters }



const getSingleCharacter = async function(id) {
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id)
    if (response.status == 200) {
    return response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getSingleCharacter }


const getSingleEpisodeDataByURL = async function(url) {
    const response = await fetch(url)
    if (response.status == 200) {
    return response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getSingleEpisodeDataByURL }




const getAllLocations = async function() {
    const response = await fetch('https://rickandmortyapi.com/api/location')
    if (response.status == 200) {
    return response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getAllLocations }


    const getAllEpisodes = async function() {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        if (response.status == 200) {
        return response.json()
        } else {
        new Error(response.statusText)
        }
        }
        export { getAllEpisodes }