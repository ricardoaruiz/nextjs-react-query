import tmdbAPI from '../../config/tmdb-api'

/**
 * Movie URL
 */
const MOVIE_URL = '/movie'

/**
 * List movies in cinema
 * @param page 
 * @returns Movies list
 */
 export const nowPlayingMovies = async (page: number) => {
    const response = await tmdbAPI.get(`${MOVIE_URL}/now_playing?page=${page}`)
    return response.data
}