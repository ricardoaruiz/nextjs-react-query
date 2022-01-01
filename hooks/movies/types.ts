import { QueryKey } from "react-query";
import { ResponseData } from "../../types";
import { QueryOptions } from "../../types";

export interface NowPlayingMoviesResponseData extends ResponseData<Movie[]> {}
  
type Movie = {
  id: number
  title: string
  original_title: string
  original_language: string
  overview: string
  backdrop_path: string
  poster_path: string
}

export type UseNowPlayingMoviesParams = {
  page: number
  key?: QueryKey
  options?: QueryOptions
}