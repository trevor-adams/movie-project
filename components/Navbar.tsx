import Link from 'next/link'

const Navbar = () => {
    return (
      <div className="flex">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    );
  };
  
  export default Navbar;
  