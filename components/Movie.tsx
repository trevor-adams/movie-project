const Movie = ({ movie }) => {
  const { id, title, overview, imageUrl } = movie
  return (
    <>
     <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img src={imageUrl} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">Edit {title}</span>
              </button>
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{title}</p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">{overview}</p>
    </>
  )
}

export default Movie
