import { useContext, useEffect, useState, useRef} from "react"
import europe from '../assets/europe.jpg'
import Search from "../components/Search"
import { SearchContext } from "../context/Context"
import { fetchTravels } from "../service/TravelService";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




export default function SearchedTravels() {

    const { searchParams, updateSearchParams, travels, setTravels, authenticated, decodedToken } = useContext(SearchContext);
    const navigate = useNavigate();
    const [ travelsState, setTravelsState ] = useState([]);
    let totalPages = useRef(0);
    let pagingDivs = useRef([]);
    let currentPage = useRef(1);
    const [loading, setLoading] = useState(true);


    useEffect( ()=> {

        setTravelsState(travels);
        totalPages.current = travels.totalPages;
        currentPage.current = travels.number;
        let newPagingDivs = [];
        for (let i = 0; i < totalPages.current; i++){
            newPagingDivs.push(i);
        }
        pagingDivs.current = newPagingDivs;
        setLoading(false);

    }, [travels])

    useEffect(  ()=> {

        console.log(travelsState);

    }, [travelsState])

    const onPaginateLeft = () => {

        let pageNumber = currentPage.current - 1
        updateSearchParams({pageNumber})
        currentPage.current = pageNumber;
        
    }

    const onPaginateRight = () => {

        let pageNumber = currentPage.current + 1
        updateSearchParams({pageNumber})
        currentPage.current = pageNumber;

        
    }

    const onPaginateNumber = (pageNumber)=> {

        updateSearchParams({pageNumber})
        
    }

    useEffect(()=>{

        let newTravels = fetchTravels(searchParams)
        setTravelsState(newTravels);

        console.log(searchParams);

    }, [searchParams])

    useEffect(()=>{

        getTravels();

    }, [])

    const getTravels = async ()=>{
        let travels = await fetchTravels(searchParams);
        setTravels(travels);
    }




    return (
        <>
        

        <div className="w-full h-full">
            <Navbar />
            
            <div className="h-full mt-20 h-full w-full flex relative justify-center bg-neutral-100 ">

                

                <div className="w-full h-full flex place-items-end mt-20">
                <div className="text-white mb-28 ml-40 mt-6">
                <h3 className="text-xl text-neutral-500 font-bold text-gray-200">AGENCE DE VOYAGE</h3>
                <h1 className="text-3xl text-neutral-950 font-extrabold">SEARCH TRAVELS</h1>
                </div>
                </div>

                <Search />

            </div>


            <div className=" mt-36 flex flex-col lg:flex-row w-full h-full">
                <div className="h-full w-full lg:w-96 flex justify-center">
                    <div className="w-[16rem] bg-white border-2 ml-20 mb-10 rounded-lg">

                        <div className="h-16 flex border-b-2 items-center ">
                            <p className="text-neutral-500 font-semibold ml-4 text-xl">Filters</p>

                        </div>

                    </div>
                </div>

                <div className="h-full w-full flex flex-col">


                    

                        <div className=" pl-4 text-2xl flex justify-between">
                            <p className="font-bold text-3xl ml-8 "> {travelsState.totalElements} tours found</p>
                            <p className="pr-20">show on the map</p>
                            
                        </div>

                    
                
                    
                  
                  <div className="flex flex-row w-full h-full mb-10">
                    <div>

                    {
                        loading ? <div>Loading...</div> : (

                            <div className=" w-full h-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2">

                        

                        {
                            travelsState.content && travelsState.content.map( travel => {
                                return (

                                    <div key={travel.id}>
                                    
                                        <Link to={ authenticated ? `http://localhost:3000/travels/${travel.id}`: '/login'  } key={travel.id}>
                                    

                                        
                                            <div  className="p-8 relative">
                                                <p className="absolute right-12 top-10 bg-[#FF62AB] text-white font-semibold rounded-2xl p-1">{travel.duration} jours</p>
        
                                                <div className="bg-white group w-full rounded-xl overflow-hidden shadow-lg">
                                                    <div className="rounded-lg  h-[12rem]">
                                                        <img className="object-cover h-full w-full" src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} alt="" />
                                                    </div>
                                                    <div className="p-4 pt-2 border-2">
                                                        <p className="pb-2 text-2xl font-semibold group-hover:text-rose-400 transition ease-in-out ease-out-in delay-100">{travel.name}</p>
                                                        <p className="break-words text-sm line-clamp-2">{travel.description}</p>
                                                        <p className="mt-2 font-semibold text-red-500 line-through">14000 MAD</p>
                                                        <p className="text-xl font-semibold">{travel.initialPrice} MAD</p>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </Link> 
                                        
                                    
                                    
                                    </div>

                                    
                                            
                                )
                            })
                            
                        }

                        </div>
                            
                        )
                    }
                    

                        <div className="ml-10 p-10 flex space-x-4  items-baseline self-center">

                            
                            
                            {
                                currentPage.current > 0 ? (
                                    <div className="">
                                    <button className="rounded-full bg-gray-200 size-8">&lt;&lt;</button>
                                    <button className="rounded-full bg-gray-200 size-8" onClick={onPaginateLeft}>
                                    &lt;
                                    </button>
                                    </div>
                                ) : ''
                            }
                            
                           
                            <ul className="flex space-x-4  items-baseline ">
                            {
                                pagingDivs.current.map( numb => {
                                    return (
                                        <li key={numb} className=""><button className={`${numb === currentPage.current ? "bg-[#FF62AB] rounded-full size-8 text-white" : ""}`} onClick={() => onPaginateNumber(numb)}>{numb + 1}</button></li>
                                    )
                                })
                            }
                            
                            </ul>

                            

                            {
                                currentPage.current < totalPages.current - 1 ? (
                                    <>
                                        <button className="rounded-full bg-gray-200 size-8" onClick={onPaginateRight}>&gt;</button>
                                        <button className="rounded-full bg-gray-200 size-8">&gt;&gt;</button>
                                    </>
                                ) : ''
                            }


                            

                        </div>
                        
                    </div>
                    </div>            
                    </div>
                    
            </div>

            <Footer />

            
            
        </div>
        
        

        </>
    )
}

