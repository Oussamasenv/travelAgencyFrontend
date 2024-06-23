import {useEffect, useState} from 'react'
import { fetchTravelById, getTravel } from '../service/TravelService'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/continents.css'
import { formatInTimeZone } from 'date-fns-tz';
import AddTravelers from '../components/modals/reservation/AddTravelers';
import AddRooms from '../components/modals/reservation/AddRooms';
import RAM from '../assets/RAM2.png'
import Kech from "../assets/kech.webp"




export default function Travel() {

    const [travel, setTravel] = useState({})
    const {id} = useParams();
    const [ loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const timeZone = 'UTC';

    const getTravel = async ()=> {

        let newTravel = await fetchTravelById(id);

        if ( newTravel ) {
            setTravel(newTravel.data);
        } else {
            console.log('get authenticated')
            navigate('/login')
        }
        

    }

    useEffect( ()=> {

            getTravel();
            console.log(id);
            setLoading(false);

    }, [])

    useEffect(()=>{
        console.log (travel)
        console.log(travel.programs)
    }, [travel])


    if ( loading ) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (

    

            <div className='flex flex-col'>
        
                <Navbar />
        
                <div className='w-full h-full mt-20'>
                    {
                        travel.programs && travel.programs.map( program => {
                            return (
                                <div className='h-20 w-full h-full'>
                                    
                                    {
        
                                                <img className='object-cover h-[30rem] w-full' src={Kech}></img>
        
                                    }
                                   
                                    
                                </div>
                            )
                        })
                    }
                </div>
        
                <div className='flex justify-center items-start w-full h-full'>
        
                    <div className='w-3/4 h-full pl-20 pr-6 pt-16'>
        
                        <div className='flex flex-col text-2xl mb-10'>
                            <span className='text-5xl font-semibold mb-4'>{travel.name}</span>
                            <span className='mb-10 text-gray-700'>prochaine depart le { travel.departure && formatInTimeZone(new Date(travel.departure * 1000), timeZone, 'yyyy-MM-dd HH:mm:ss z')}</span>
                            <div className='flex justify-between p-10 bg-gray-100 rounded-2xl  font-bold'>
                                <span className=''>duration: {travel.duration}</span>
                                <span className=''>type: {travel.type}</span>
                                <span>group size: {travel.groupSize}</span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-6'>
        
                        {
                        travel.programs && travel.programs.map( program => {
                            return (
                                <div className='w-full h-full flex flex-col'>
                                    
                                    {
        
                                                <img className='object-cover h-[30rem] w-full rounded-xl' src={Kech}></img>
        
                                    }
                                   
                                    
                                </div>
                            )
                        })
                        }
        
                        <div>
                        {
                        travel.programs && travel.programs.map( program => {
                            return (
                                <div key={program.id} className='w-full h-full'>
                                    
                                    {
                                        <div key={program.id} className='flex space-x-6 overflow-auto hide-scrollbar'>
        
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
                                                <img className='size-[10rem] object-cover rounded-xl' src={Kech}></img>
    
        
                                        </div>
                                                
        
                                    }
                                   
                                    
                                </div>
                            )
                        })
                        }
                        </div>
        
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-4xl font-semibold'>details</h1>
                            <span>
                                {
                                    travel.description
                                }
                            </span>
                            <h1 className='text-4xl font-semibold mt-20'>Programs</h1>
        
                            <div className='flex overflow-auto hide-scrollbar space-x-4'>
        
        
                                <div className='flex-shrink-0 flex flex-col'>
        
                                    <img className='object-cover size-[24rem] rounded-xl' src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} />
                                    <span>{travel.programs && travel.programs[0].destination}</span>
                                    <span>{travel.programs && travel.programs[0].description}</span>
        
                                </div> 
        
                                <div className='flex-shrink-0 flex flex-col'>
        
                                    <img className='object-cover size-[24rem] rounded-xl' src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} />
                                    <span>{travel.programs && travel.programs[0].destination}</span>
                                    <span>{travel.programs && travel.programs[0].description}</span>
        
                                </div> 
        
                                <div className='flex-shrink-0 flex flex-col'>
        
                                    <img className='object-cover size-[24rem] rounded-xl' src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} />
                                    <span>{travel.programs ? travel.programs[0].destination : <p>Loading...</p>}</span>
                                    <span>{travel.programs ? travel.programs[0].description : <p>Loading...</p>}</span>
        
                                </div> 
        
                                <div className='flex-shrink-0 flex flex-col'>
        
                                    <img className='object-cover size-[24rem] rounded-xl' src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} />
                                    <span>{travel.programs && travel.programs[0].destination}</span>
                                    <span>{travel.programs && travel.programs[0].description}</span>
        
                                </div> 
        
                                <div className='flex-shrink-0 flex flex-col relative'>
        
                                    <span className='absolute'>{}{travel.programs && travel.programs[0].duration}</span>
        
                                    <img className='object-cover size-[24rem] rounded-xl' src={`/images/${travel.programs && travel.programs[0].filedatas[0].name}`} />
                                    <span>{travel.programs && travel.programs[0].destination}</span>
                                    <span>{travel.programs && travel.programs[0].description}</span>
        
                                </div> 
        
                            </div>
        
                        </div>
        
                        </div>
        
                    </div>
        
                    <div className='w-1/4 rounded-lg h-full pr-20 pt-16'>
        
                        <div className='font-semibold text-xl border-[5px] w-full rounded-xl border-yellow-400 mb-20 flex flex-col items-start space-y-4 p-6 text-xl'>
                            <img src={RAM} alt='RAM logo' />
                            <span className='self-center'>A partir de: {travel.initialPrice}</span>
                            <span>nombre de personne: </span>
                            {/* <span>adultes: </span>
                            <span>enfant: </span> */}
        
                            <AddTravelers />
                            <AddRooms />
        
        
                            <span>extra service:</span>
                            <div className='mb-4 flex flex-col pl-4'>
                                <label>
                                <input type="checkbox" name="service1" /> Service 1
                                </label>
                                <label>
                                <input type="checkbox" name="service2" /> Service 2
                                </label>
                                <label>
                                <input type="checkbox" name="service3" /> Service 3
                                </label>
                                <label>
                                <input type="checkbox" name="service4" /> Service 4
                                </label>
                            </div>
                            
                            
        
                            <button className='bg-[#FF62AB] mt-10 text-white p-2 rounded-l-full rounded-r-full self-center'>Book a {travel.initialPrice}</button>
                        </div>
        
                    </div>
                </div>
        
                <Footer />
        
              
            </div>
          )
    }

  
}
