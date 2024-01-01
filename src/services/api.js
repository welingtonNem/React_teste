import axios from "axios";


// url base: https://api.themoviedb.org/3/

//caminho: movie/now_playing?api_key=b9eca62d1834bf7d43422282102d7fd9&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api
