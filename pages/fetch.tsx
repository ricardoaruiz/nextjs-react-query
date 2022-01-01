import React from 'react'
import type { NextPage } from 'next'

import { Template } from '../components/Template'

type ResponseData = {
  page: number
  total_pages: number
  total_results: number
  results: Movie[]
}

type Movie = {
  id: number
  title: string
  original_title: string
  original_language: string
  overview: string
  backdrop_path: string
  poster_path: string
}

const BASE_URL = 'https://api.themoviedb.org/3'
const MOVIE_URL = '/movie/now_playing?language=pt-BR&region=BR&'
const API_KEY = '&api_key=28c5cee0053b0fa791c3e2ffc9e6e674'

const Fetch: NextPage = () => {

  const [data, setData] = React.useState<ResponseData>()
  const [page, setPage] = React.useState(0)
  const [isValidating, setIsValidating] = React.useState(false)
  const [error, setError] = React.useState('')

  /**
   * Call movies API
   * @param page 
   * @returns 
   */
  const loadMovies = async (page: number) => {
    try{
      setIsValidating(true)
      const response = await fetch(`${BASE_URL}${MOVIE_URL}&page=${page}${API_KEY}`)
      const data = await response.json() as ResponseData
      return data
    } catch(error: any) {
      setError(error.message)
    } finally {
      setTimeout(() => {
        setIsValidating(false)        
      }, 500);
    }
  }

  /**
   * Load movies
   */
  const loadData = React.useCallback(async (page: number) => {
    const movies = page 
      ? await loadMovies(page)
      : undefined
    setData(movies)
  }, [])

  /**
   * Load data every page change
   */
  React.useEffect(() => {
      loadData(page) 
  }, [loadData, page])

  return (
    <Template>
      <h1 style={{ textAlign: 'center' }}>Movies - fetch/useEffect/useState</h1>

      {/* Load button */}
      {!data && !isValidating && (
        <button 
            type="button" 
            onClick={() => {
                setPage(1)
            }}
            style={{ justifySelf: 'center', alignSelf: 'center' }}
        >
            Carregar
        </button>
      )}

      {/* Loading */}
      {isValidating && <h1 style={{ textAlign: 'center' }}>Carregando...</h1>}

      {/* Error */}
      {error && <h1>Ocorreu um erro ao buscar os dados</h1>}

      {/* Data */}
      {!isValidating && data && (
        <>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            {Array.from({ length: data.total_pages || 0 }, (_, i) => {
              return (
                <button 
                  type="button"
                  onClick={() => setPage(i+1)}
                  key={i}
                  style={{
                    backgroundColor: page === i+1 ? 'red' : 'unset'
                  }}
                >
                  {i+1}
                </button>
              )
            })} 
          </div>

          {/* Clean data button */}
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button 
              type="button" 
              onClick={() => {
                setPage(0)
              }}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              Limpar dados
            </button>
          </div>

          {/* Items */}
          <ul>
            {data.results.map(movie => (
              <li key={movie.id} style={{ borderBottom: '1px solid black', marginTop: '10px' }}>
                <div>Título: {movie.title}</div>
                <div>Idioma: {movie.original_language}</div>
                <div>Descrição: {movie.overview}</div>
              </li>
            ))}
          </ul>  
        </>
      )}
    </Template>
  )
}

export default Fetch
