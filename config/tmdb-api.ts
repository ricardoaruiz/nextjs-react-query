import axios from 'axios'

const TMDB_API_KEY = '28c5cee0053b0fa791c3e2ffc9e6e674'
const LANGUAGE = 'pt-BR'
const REGION = 'BR'

const tmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

tmdbAPI.interceptors.request.use(config => {

    //Add default params on query string
    config.url = config.url?.concat(`&api_key=${TMDB_API_KEY}`)
        .concat(`&language=${LANGUAGE}`)
        .concat(`&region=${REGION}`)


    return config
})

export default tmdbAPI