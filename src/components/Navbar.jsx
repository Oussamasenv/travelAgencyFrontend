import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoImage from "../assets/logo1.jpeg"
import { useContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'
import Logo from '../assets/logo2.png'
import { SearchContext } from '../context/Context';

function Navbar() {

  const { authenticated, decodedToken, setAuthenticated } = useContext(SearchContext)
  const [ authState, setAuthState ] = useState(false);


  // const [ authenticated, setAuthenticated ] = useState(false)
  // const [ decodedToken, setDecodedToken ] = useState()

  const navigate = useNavigate();

  // useEffect(()=>{

  //   let token = localStorage.getItem("token");
  //   console.log(token)

  //   if (token) {

  //   let decodedTokenVar = jwtDecode(token);
  //   setDecodedToken(decodedTokenVar)

  // }

  // }, [])

  // useEffect(()=>{

  //   if (decodedToken) {

  //     let expireAt = new Date( decodedToken.exp * 1000 );
  //     let nowDate = new Date();

  //     console.log(expireAt + '/' + nowDate)

  //     if  ( expireAt < nowDate ) {

  //       setAuthenticated(false)

  //     } else {

  //       setAuthenticated(true)

  //   }

  //   }

    
  // }, [decodedToken])

  useEffect(()=>{
    console.log(authenticated);
    setAuthState(authenticated)
  }, [authenticated])


  const location = useLocation();

  if (location.pathname.startsWith('/admin'))
    {
      return null;
    }

  const setLogout = () => {

    localStorage.removeItem("token")
    setAuthenticated(false)
    navigate('/')
    
    
  }

  return (
    <nav className="flex justify-between items-center text-xl mt-0 fixed w-full z-10 top-0 h-20 bg-white border-b-20">
      {/* <div className="flex justify-between items-center text-xl pl-4 pr-4"> */}
        
          <Link to="/" className="">
            <img className='h-32' src={Logo} alt='image' />
          </Link>
        
        <div className="flex items-center mr-4">

          {
            authState && decodedToken.role === "ADMIN" ? 
            
            <Link to={"/admin/travels"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Admin</Link> 
            
            : 
            
            (
              ''
            )
          }

          {/* <Link to={"/admin/travels"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Admin</Link> */}

          {
            authState ? <Link onClick={setLogout} className="bg-rose-100 hover:bg-rose-200 hover:text-rose-700 transition rounded-l-full rounded-r-full text-rose-700 inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
            Logout
          </Link> : (

            <Link to="/login" className="bg-rose-100 hover:bg-rose-200 hover:text-rose-700 transition rounded-l-full rounded-r-full text-rose-700 inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
            se connecter
            </Link>

          )
          }

          
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
