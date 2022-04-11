import type { NextPage } from 'next'
import Head from 'next/head'
import Movie from '../components/Movie'
import Navbar from '../components/Navbar'
//import { movies } from '../data/movies' //TODO: Remove Fake Data

import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

const MoviesQuery = gql`
  query MoviesQuery {
  movies {
    id
    title
    overview
    imageUrl
  }
}
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(MoviesQuery, {
    fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Movie Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Navbar />
        <h1 className="text-6xl font-bold">Movie Project</h1>
        <div className="pt-2">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {data.movies.map((movie) => (
              <li key={movie.id} className="relative">
                <Movie movie={movie} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
