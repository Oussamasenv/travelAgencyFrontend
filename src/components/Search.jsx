import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { fetchTravels } from "../service/TravelService"
import FetchedTravels from "./FetchedTravels";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/Context";

export default function Search(props) {

    const { searchParams, updateSearchParams } = useContext(SearchContext);
    const { setTravels } = useContext(SearchContext);
    const navigate = useNavigate();
    let nameRef = useRef('')
    const location = useLocation();
    const currentUrl = location.pathname;
    const [ isMounted, setIsMounted ] = useState(false);



    useEffect(()=>{
        setIsMounted(true);
    }, [])


    const updateSearch = () => {
        let name = nameRef.current.value;
        updateSearchParams({ name });
    };

    useEffect(() => {
        if(isMounted){
        const fetchAndUpdateTravels = async () => {
            let travels = await fetchTravels(searchParams);
            setTravels(travels);
        };

        if (currentUrl !== "/travels/search") {
            navigate("/travels/search");
        }

        fetchAndUpdateTravels();
    }
    }, [searchParams, currentUrl, navigate, setTravels]);




    

    return (

        <div 
                className="container bg-white translate-y-1/2 mx-auto flex flex-col items-start border-yellow-300 border-8 justify-center absolute bottom-0 rounded-xl w-[91%] p-6">

                    <div className="flex flex-col space-y-5 w-full">
                        <div className="flex space-x-8 items-baseline">

                            <span className="text-gray-500 text-2xl">Flight Type: </span>
                            <ul className="flex space-x-4 text-2xl ">
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />One Way</li>
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />Round trip</li>
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />Multiple-destinations</li>
                            </ul>

                        </div>
                        <div className=" text-xl flex justify-between">
                            <div className="space-x-4 ">
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="text" name="" ref={nameRef}  placeholder="name" />
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="text" name="" placeholder="destination" />
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48focus:outline-none" type="number" name="" placeholder="duration" />
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="text" name="" placeholder="Travelers" />
                            </div>
                            
                            <button onClick={updateSearch} className="bg-[#FF62AB] rounded-lg p-2 pl-4 text-white hover:brightness-[0.9] duration-200 w-32 h-10">Rechercher</button>
                            
                        </div>
                    </div>
                                        
        </div>

    )
}