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
    <nav className="p-2 mt-0 fixed w-full z-10 top-0 h-20 bg-white border-b-20">
      <div className="mx-auto flex justify-between items-center text-xl pl-4 pr-4">
        <div className="flex">
          <Link to="/" className="w-14">
            <img src={LogoImage} alt='image' />
          </Link>
        </div>
        <div className="flex">
          <Link to={"/admin/travels"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Admin</Link>
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
