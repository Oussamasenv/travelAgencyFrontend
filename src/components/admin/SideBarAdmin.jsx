import { useEffect, useState } from "react"
import Logo from '../../assets/logo1.jpeg'
import { Link } from "react-router-dom";




export default function SideBarAdmin(){

    const [displayed, setDsiplayed ] = useState(true); 

    const onChangeDisplay = () => {
        setDsiplayed(!displayed)
    }

    useEffect(()=>{
        console.log(displayed)
    }, [displayed])



    return (
        <>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        { !displayed ? <div className={`flex items-center m-4 bg-purple-200 rounded-xl size-10 justify-center`}><button onClick={onChangeDisplay}>show</button></div> : <>

        <div className={`min-h-screen flex flex-row bg-gray-200 `}>
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="relative flex items-center justify-center h-20 shadow-md">
                {/* <h1 className="text-3xl uppercase text-indigo-500">Logo</h1> */}
                <img className="size-16" src={Logo} alt="logo" />
                <button onClick={onChangeDisplay} className="absolute bg-purple-200 rounded-xl size-10 right-2 top-2">hide</button>
                </div>
                <ul className="flex flex-col py-4">

                <li>
                    <Link to="/admin/travels" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                    <span className="text-lg font-semibold ">Travels</span>
                    </Link>
                </li>
             
                <li>
                    <Link to="/admin/programs" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                    <span className="text-lg font-semibold">Programs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/airplaneCompanies" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                    <span className="text-lg font-semibold">AirplaneCompanies</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/facilities" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                    <span className="text-lg font-semibold">Facilities</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/hotels" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                    <span className="text-lg font-semibold">Hotels</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/rooms" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                    <span className="text-lg font-semibold">Rooms</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/reservations" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                    <span className="text-lg font-semibold">Reservations</span>
                    <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/customers" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                    <span  className="text-lg font-semibold">Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                    <span  className="text-lg font-semibold">Users</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/admin/logout" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                    <span className="text-lg font-semibold">Logout</span>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        
        </>}

            
            
            </>
    )
}