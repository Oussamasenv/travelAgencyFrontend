import { useContext, useEffect, useRef, useState } from "react";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import { SearchContext } from "../../context/Context";
import { deleteTravel, fetchTravels } from "../../service/TravelService";
import { formatInTimeZone } from 'date-fns-tz';
import AppModal from '../../components/AppModal'
import DisplayMessage from "../../components/DisplayMessage";
import EditModal from "../../components/modals/travels/EditModal";
import ShowDetails from "../../components/modals/travels/ShowDetails";
import AddModal from "../../components/modals/travels/AddModal";



export default function AdminTravel(){

    const { travels, setTravels } = useContext(SearchContext);
    const [ travelsState, setTravelsState ] = useState([]);
    const { searchParams, updateSearchParams } = useContext(SearchContext);
    let totalPages = useRef(0);
    let pagingDivs = useRef([]);
    let currentPage = useRef(1);
    const timeZone = 'UTC';
    const [ displayMessage, setDisplayMessage ] = useState('');
    
    const fetchAndUpdateTravels = async () => {
        let travels = await fetchTravels(searchParams);
        setTravels(travels);
    };

    useEffect(()=>{
        fetchAndUpdateTravels();
    },[])


    useEffect(()=>{
        setTravelsState(travels);
        console.log(travels);
    },[travels])

    const onDelete = async (id)=>{

        let response = await deleteTravel(id);
        let travels = await fetchTravels(searchParams);
        setTravels(travels);
        setDisplayMessage(response);

    }

    useEffect(()=>{
        console.log(displayMessage)
    }, [displayMessage])

    return (
        <div className="flex ">

            {
                displayMessage && (
                    <div className="absolute top-2 right-2">
                        <DisplayMessage response={displayMessage}/>
                    </div>
                )
               

            }

            <div className="bg-gray-200">
            <SideBarAdmin />
            </div>
            <div className="justify-center w-full h-full h-screen bg-gray-200">
            <div className="m-16 mt-20 w-[90%]">
            <div className="pl-6 pr-6 flex m-4 justify-between bg-white rounded-2xl text-xl p-2">
                <div>filter</div>
                {/* <div>add</div> */}
                <AddModal />

            </div>
            <div className="mt-8 w-full h-[34rem] overflow-auto rounded-2xl p-2">
            
            <table className="shadow-lg bg-white border-collapse  w-full rounded-2xl">
                <thead>
                <tr>
                    <th className="bg-blue-100 border text-left w-2 px-6 py-4">id</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">TravelName</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Continent</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Country</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">DepartureDate</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">ReturnDate</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Action</th>

                </tr>
                </thead>

                <tbody>
                
                {
                    travelsState.content && travelsState.content.map( travel => 
                        {
                            return (
                                
                                    <tr key={travel.id} className="hover:bg-gray-50 font-semibold">
                                        <td className="border px-6 py-4 w-2">{travel.id}</td>
                                        <td className="border px-8 py-4">{travel.name}</td>
                                        <td className="border px-8 py-4">{travel.continent}</td>
                                        <td className="border px-8 py-4">{travel.country}</td>
                                        <td className="border px-8 py-4">{formatInTimeZone(new Date(travel.departure * 1000), timeZone, 'yyyy-MM-dd HH:mm:ss z')}</td>
                                        <td className="border px-8 py-4">{formatInTimeZone(new Date(travel.returnDate * 1000), timeZone, 'yyyy-MM-dd HH:mm:ss z')}</td>
                                        <td className="border px-8 py-4">
                                            <div className="flex space-x-2 text-white">
                                                {/* <button className="bg-blue-200 rounded-lg text-black p-2">edit</button> */}
                                                <EditModal />
                                                {/* <button onClick={()=>{onDelete(travel.id)}} className="bg-red-400 rounded-lg p-1">delete</button> */}
                                                <AppModal deleteFunction={onDelete} id={travel.id}/>
                                                {/* <button className="bg-yellow-500 rounded-lg p-1">show</button> */}
                                                <ShowDetails travel={travel} />
                                                
                                            </div>
                                        </td>
                                    </tr>
                               
                                
                            )
                        }

                    )
                }
                </tbody>

                </table>
                </div>
          
            </div>
            </div>
        </div>
    )
}