import React from 'react'
import type { NextPage } from 'next'

import { Template } from '../components/Template'
import { useNowPlayingMovies } from '../hooks'

const ReactQuery: NextPage = () => {

  const [page, setPage] = React.useState(0)
  const { data, isError, error, isLoading, removeAll } = useNowPlayingMovies({
    page, 
    options: { 
      enabled: page > 0,
      cacheTime: 10000 //10 segundos
    }
  })

  return (
    <Template>
      <h1 style={{ textAlign: 'center' }}>Movies - React-Query</h1>

      {/* Load button */}
      {!data && !isLoading && (
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
      {isLoading && <h1 style={{ textAlign: 'center' }}>Carregando...</h1>}
      
      {/* Error */}
      {isError && <h1>Ocorreu um erro ao buscar os dados. {error?.message} </h1>}

      {/* Data */}
      {!isLoading && data && (
        <>

          {/* Pagination */}
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
                removeAll()
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

export default ReactQuery
