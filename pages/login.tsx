import type { NextPage } from 'next'
import Head from 'next/head'

const Login: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Movie Project | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="flex-1 mt-3 text-2xl">Login Form</p>
      </main>
    </div>
  )
}

export default Login
