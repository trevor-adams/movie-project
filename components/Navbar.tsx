import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex w-screen justify-end px-16">
      <div className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <Link href="/movie">
          <a>Add Movie</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
