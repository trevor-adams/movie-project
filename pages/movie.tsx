import type { NextPage } from 'next'
import Head from 'next/head'
import MovieForm from '../components/MovieForm'

const Movie: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Movie Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <MovieForm />
      </main>
    </div>
  )
}

export default Movie
