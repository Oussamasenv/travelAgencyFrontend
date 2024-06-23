import { useContext, useEffect, useState } from "react";
import { fetchTravels } from "../service/TravelService"

import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/Context";

export default function Search(props) {

    const { searchParams, updateSearchParams } = useContext(SearchContext);
    const { setTravels } = useContext(SearchContext);
    const navigate = useNavigate();
    const location = useLocation();
    const currentUrl = location.pathname;
    const [ isMounted, setIsMounted ] = useState(false);

    const [ typedValues, setTypedValues ] = useState({
        name: '',
        destination: '',
        duration: 0,
        travelers: 0,
        type: ''
    })



    useEffect(()=>{
        setIsMounted(true);
    }, [])


    const updateSearch = () => {

        updateSearchParams(typedValues);
        navigate(`/travels/search`)

    };

    const fetchAndUpdateTravels = async () => {
        let travels = await fetchTravels(searchParams);
        setTravels(travels);
    };

    useEffect(() => {
        
        if(isMounted){
        

        if (currentUrl !== "/travels/search") {
            navigate("/travels/search");
        }

        fetchAndUpdateTravels();
    }
    }, [searchParams, currentUrl, navigate, setTravels]);


    const handleChange = (event)=> {

        let { name, value } = event.target;

        value = ( name === 'duration' || name === 'travelers') ? ( value ? parseInt(value, 10) : 0) : value;

        setTypedValues(
            {
                ...typedValues,
                [name]: value
            }
        )
    }

    useEffect (()=> {
        console.log(typedValues)
    }, [typedValues])
    

    return (

        <div 
                className="bg-white translate-y-1/2 mx-auto flex flex-col items-start border-yellow-200 border-8 justify-center absolute bottom-0 rounded-xl w-[91%] p-6">

                    <div className="flex flex-col space-y-5 w-full">
                        {/* <div className="flex space-x-8 items-baseline">

                            <span className="text-gray-500 text-2xl">Flight Type: </span>
                            <ul className="flex space-x-4 text-2xl ">
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />One Way</li>
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />Round trip</li>
                                <li><input className="mr-2 h-4 w-4" type="checkbox" />Multiple-destinations</li>
                            </ul>

                        </div> */}


                        <div className="flex space-x-8 items-baseline">
                            <span className="text-gray-500 text-2xl">Flight Type: </span>
                            <div className="flex space-x-4 text-2xl">
                                <label>
                                    <input className="mr-2 h-4 w-4" type="radio" value="ONEWAY" name="type" onChange={handleChange} />One Way
                                </label>
                                <label>
                                    <input className="mr-2 h-4 w-4" type="radio" value="ROUNDTRIP" name="type" onChange={handleChange} />Round trip
                                </label>
                                <label>
                                    <input className="mr-2 h-4 w-4" type="radio" value="MULTICITY" name="type" onChange={handleChange} />Multiple-destinations
                                </label>
                            </div>
                        </div>


                        <div className=" text-xl flex justify-between">
                            <div className="space-x-4 ">
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="text" name="name" value={typedValues.name}  placeholder="name" onChange={handleChange}/>
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="text" name="destination" value={typedValues.destination} placeholder="destination" onChange={handleChange}/>
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48focus:outline-none" type="number" name="duration" value={typedValues.duration === 0 ? '' : typedValues.duration} placeholder="duration" onChange={handleChange}/>
                            <input className="bg-gray-100 rounded-lg p-2 pl-4 w-48 focus:outline-none" type="number" name="travelers" value={typedValues.travelers === 0 ? '' : typedValues.travelers} placeholder='travelers' onChange={handleChange}/>
                            </div>
                            
                            <button onClick={updateSearch} className="bg-[#FF62AB] rounded-lg p-2 pl-4 text-white hover:brightness-[0.9] duration-200 w-32 h-10">Rechercher</button>
                            
                        </div>
                    </div>
                                        
        </div>

    )
}