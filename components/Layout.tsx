import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-20 text-center">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default Layout
