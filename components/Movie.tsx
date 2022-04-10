import Link from 'next/link'

const Movie = ({ movie }) => {
  const { id, title, overview, imageUrl } = movie
  return (
    <>
      <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={imageUrl}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <Link href={`/movie?movieId=${id}`}>
          <a className="absolute inset-0 focus:outline-none">
            <span className="sr-only">Edit {title}</span>
          </a>
        </Link>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {title}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {overview}
      </p>
    </>
  )
}

export default Movie
