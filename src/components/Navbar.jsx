import { Link, useLocation } from 'react-router-dom';
import LogoImage from "../assets/logo1.jpeg"

{/* ...other imports */}

function Navbar() {

  const location = useLocation();

  if (location.pathname.startsWith('/admin'))
    {
      return null;
    }

  return (
    <nav className="p-2 mt-0 fixed w-full z-10 top-0 h-16 bg-white border-b-20">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <Link to="/" className="w-14">
            <img src={LogoImage} alt='image' />
          </Link>
        </div>
        <div className="flex">
          <Link to={"/admin/travels"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Admin</Link>
          <Link to="/travels/search" className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">search</Link>
          <Link to="/travels" className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">travels</Link>
          <Link to="/register" className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
            Register
          </Link>
          <Link to="/login" className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
