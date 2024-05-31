import { useContext, useEffect, useState, useRef} from "react"
import europe from '../assets/europe.jpg'
import Search from "../components/Search"
import { SearchContext } from "../context/Context"
import { fetchTravels } from "../service/TravelService";
import { useLocation, useParams } from "react-router-dom";


export default function SearchedTravels() {

    const { searchParams, updateSearchParams } = useContext(SearchContext);
    const { travels } = useContext(SearchContext);
    const [ travelsState, setTravelsState ] = useState([]);
    let totalPages = useRef(0);
    let pagingDivs = useRef([]);
    let currentPage = useRef(1);
    const [loading, setLoading] = useState(false);


    useEffect( ()=> {
        console.log(travels)
        setLoading(true);
        setTravelsState(travels);
        totalPages.current = travels.totalPages;
        currentPage.current = travels.number;
        let newPagingDivs = [];
        for (let i = 0; i < totalPages.current; i++){
            newPagingDivs.push(i);
        }
        pagingDivs.current = newPagingDivs;
        setLoading(false);

        console.log("current page: ",currentPage.current)
        console.log("total page: ", totalPages.current)
        console.log("pages: ", pagingDivs)

    }, [travels])

    useEffect(  ()=> {
        
        console.log(currentPage)
        console.log(pagingDivs)

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


        console.log(pageNumber)

        updateSearchParams({pageNumber})

        // currentPage.current = pageNumber;


        
    }

    useEffect(()=>{

        let newTravels = fetchTravels(searchParams)
        setTravelsState(newTravels);

        console.log(searchParams);

    }, [searchParams])





    return (
        <>

        <div>
            <div className="h-70 w-full flex relative justify-center bg-neutral-100">

                <div className="w-full h-full flex place-items-end">
                <div className="text-white mb-28 ml-40 mt-6">
                <h3 className="text-xl text-neutral-500 font-bold text-gray-200">AGENCE DE VOYAGE</h3>
                <h1 className="text-3xl text-neutral-950 font-extrabold">SEARCH TRAVELS</h1>
                </div>
                </div>

                <Search />

            </div>


            <div className="h-screen mt-36 flex flex-col lg:flex-row">
                <div className="h-full w-full lg:w-96 flex justify-center">
                    <div className="w-[16rem] bg-white border-2 ml-20 mb-10 rounded-lg">

                        <div className="h-16 flex border-b-2 items-center ">
                            <p className="text-neutral-500 font-semibold ml-4 text-xl">Filters</p>

                        </div>

                    </div>
                </div>

                <div className="h-full w-full flex flex-col">


                    

                        <div className=" pl-4 text-2xl flex justify-between">
                            <p className="font-bold text-3xl ml-8 ">12 tours found</p>
                            <p className="pr-20">show on the map</p>
                            
                        </div>

                    
                
                    
                  
                  <div className="flex flex-row">
                    <div>
                    <div className=" w-full h-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2">

                        <div className="p-8 relative ">
                            <p className="absolute right-12 top-10 bg-[#FF62AB] text-white rounded-2xl p-1">10 jours</p>
                            <div className="bg-white group w-full rounded-lg overflow-hidden border-2">
                                <div className="rounded-lg  h-[12rem]">
                                    <img className="object-cover h-full w-full" src={europe} alt="" />
                                </div>
                                <div className="p-4 pt-2">
                                    <p className="pb-2 text-2xl font-semibold group-hover:text-[#FF62AB] transition ease-in-out ease-out-in delay-200">jamaa lafna trip</p>
                                    <p className="break-words text-sm line-clamp-2">hello my name is oussama, i am your guide knsdjc d sos sco sdo sdcjo sdcod  scjo soc sod ojdsj codsc jos cjdsc </p>
                                    <p className="mt-2 font-semibold text-red-500 line-through">16,000.00MAD</p>
                                    <p className="text-xl font-semibold">14,000.00MAD</p>
                                </div>
                            </div>
                        </div>

                    

                            <div className="p-8 relative">
                            <p className="absolute right-12 top-10 bg-[#FF62AB] text-white rounded-2xl p-1">10 jours</p>
                            <div className="bg-white group w-full rounded-lg overflow-hidden border-2">
                                <div className="rounded-lg  h-[12rem]">
                                    <img className="object-cover h-full w-full" src={europe} alt="" />
                                </div>
                                <div className="p-4 pt-2">
                                    <p className="pb-2 text-2xl font-semibold group-hover:text-rose-400 transition ease-in-out ease-out-in delay-300">jamaa lafna trip</p>
                                    <p className="break-words text-sm">hello my name is oussama, i am your guide </p>
                                    <p className="mt-2 font-semibold text-red-500 line-through">16,000.00MAD</p>
                                    <p className="text-xl font-semibold">14,000.00MAD</p>
                                </div>
                            </div>
                        </div>

                        {
                            travelsState.content && travelsState.content.map( travel => {
                                return (
                                    

                                        
                                                <div  key={travel.id} className="p-8 relative">
                                                                                <p className="absolute right-12 top-10 bg-[#FF62AB] text-white rounded-2xl p-1">10 jours</p>

                                                    <div className="bg-white group w-full rounded-lg overflow-hidden">
                                                        <div className="rounded-lg  h-[12rem]">
                                                            <img className="object-cover h-full w-full" src={europe} alt="" />
                                                        </div>
                                                        <div className="p-4 pt-2 border-2">
                                                            <p className="pb-2 text-2xl font-semibold group-hover:text-rose-400 transition ease-in-out ease-out-in delay-300">{travel.name}</p>
                                                            <p className="break-words text-sm line-clamp-2">hello my name is oussama, i am your guide knsdjc d sos sco sdo sdcjo sdcod  scjo soc sod ojdsj codsc jos cjdsc </p>
                                                            <p className="mt-2 font-semibold text-red-500 line-through">16,000.00MAD</p>
                                                            <p className="text-xl font-semibold">14,000.00MAD</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                )
                            })
                            
                        }

                        </div>

                        <div className="ml-10 p-10 flex space-x-4  items-baseline">

                            
                            
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
                            
                           
                            <ul className="flex space-x-4  items-baseline">
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
        </div>

        </>
    )
}

