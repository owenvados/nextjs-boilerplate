'use client'
import { useEffect, useState } from 'react'
import Button from '../../elements/Button'
import ContainerImg from '../../elements/ContainerImg'
import PosterImg from '../../elements/PosterImg'

interface Movie {
  title: string
  description: string
  genre: string
  highlighted: boolean
  id: string
  poster: string
  rating: number
  thumbnail: string
}

const fetchListMovies = async (token: string | null) => {
  const myHeaders = new Headers()

  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  return fetch(
    'https://kata.conducerevel.com/films/movies',
    requestOptions
  ).then((response) => response.json())
}
const fetchGenres = async (token: string | null) => {
  const myHeaders = new Headers()

  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  return fetch(
    `https://kata.conducerevel.com/films/genres`,
    requestOptions
  ).then((response) => response.json())
}

export default function ListMovies() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')

    fetchListMovies(token).then((items) => {
      setMovies(items)
    })
    fetchGenres(token).then((items) => {
      setGenres(items)
    })
  }, [])

  const myGenres = [...new Set(movies.map((movie: Movie) => movie.genre))]
  console.log(myGenres)

  const handleComedyFilter = () => {
    const filterMovies = movies.filter(
      (movie: Movie) => movie.genre === '22f9f9a3-c84c-4d28-81f5-218d87cc41f5'
    )
    setMovies(filterMovies)
  }
  return (
    <>
      <Button onClick={handleComedyFilter}>Comedy</Button>
      {myGenres.map((idGenre) => {
        // get genre name
        const genre = genres.filter(
          (item: { id: string; genre: string }) => item.id === idGenre
        )[0]
        // get movies by genre
        const filterMovies: Movie[] = movies.filter(
          (movie: Movie) => movie.genre === idGenre
        )
        return (
          <>
            <h2>{genre}</h2>
            <aside className="u-flex c-movies-list">
              {filterMovies.map((movie, key) => (
                <ContainerImg key={key}>
                  <PosterImg src={movie.thumbnail}></PosterImg>
                </ContainerImg>
              ))}
            </aside>
          </>
        )
      })}
    </>
  )
}
