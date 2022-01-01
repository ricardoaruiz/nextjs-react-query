import { useQuery } from "react-query";
import { QUERY_OPTIONS_DEFAULT } from "../../constants";
import { useReactQueryUtils } from "../useReactQueryUtils";
import { nowPlayingMovies } from './fetchers'
import { UseNowPlayingMoviesParams, NowPlayingMoviesResponseData } from './types'

/**
 * List of movies in cinema hook
 * @param page 
 * @param options 
 * @returns List of movies in cinema
 */
export const useNowPlayingMovies = ({
    page, 
    key = 'playingMovies', 
    options = QUERY_OPTIONS_DEFAULT
  }: UseNowPlayingMoviesParams) => {

    const { removeQuery } = useReactQueryUtils()

    /**
     * 
     */
    const nowPlaying = useQuery<NowPlayingMoviesResponseData, Error>(
        [key, page], 
        () => nowPlayingMovies(page),
        { ...options }
      )

    /**
     * 
     */
    const removeAll = () => {
      removeQuery(key)
    }

    return { ...nowPlaying, removeAll }
}