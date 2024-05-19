import { Link } from 'react-router-dom';

{/* ...other imports */}

function Navbar() {
  return (
    <nav className="bg-yellow-100 p-2 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <Link to="/" className="text-black text-base no-underline hover:text-white hover:no-underline">
            <span className="text-2xl pl-2"><i className="em em-grinning"></i> Home</span>
          </Link>
        </div>
        <div className="flex">
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
