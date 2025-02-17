import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { fetchPrograms } from '../../../service/ProgramService'
import { fetchAirplaneCompanies } from '../../../service/AirPlaneCompanyService'
import { createTravel } from '../../../service/TravelService'
import ReactSelect from 'react-select'
import { fetchRooms } from '../../../service/RoomsService'

export default function AddModal() {

    const [open, setOpen] = useState(false)
    const [programs, setPrograms ] = useState([])
    const [ airplaneCompanies, setAirplaneCompanies ] = useState([]);
    const [ rooms, setRooms] = useState([]);
    const [ travelWapper, setTravelWrapper ] = useState({
        
        travelDto: {

            name: '',
            continent: '',
            country: '',
            departure: '',
            type: '',
            initialPrice: 0,
            discountedPrice: 0,
            groupSize: 0,
            description: ''

        },

        airplaneCompanyDtos: [],
        programDtos: [],
        roomDtos: []

    });

    const [ selectedPrograms, setSelectedPrograms ] = useState([])
    const [ selectedAirplaneCompany, setSelectedAirplaneCompany ] = useState([])
    const [ selectedRooms, setSelectedRooms ] = useState([])

    const handleSelectPrograms = (data)=> {
        setSelectedPrograms(data)
        
    }

    const handleSelectAirplaneCompany = (data) => {
        setSelectedAirplaneCompany(data);
    }

    const handleSelectedRooms = (data) => {
        setSelectedRooms(data);
    }

    useEffect( ()=> {

        let ac = airplaneCompanies.filter( ac => {
            return (
                ac.name === selectedAirplaneCompany.value
            )
        })

        console.log(ac);

        setTravelWrapper(
            {
                ...travelWapper,
                airplaneCompanyDtos: ac
            }
        )

    }, [selectedAirplaneCompany])

    useEffect(()=> {

        let prs = selectedPrograms.flatMap(selectedp => {
            return programs.filter(pr => pr.name === selectedp.value);
        });


        console.log(prs);

        setTravelWrapper(
            {
                ...travelWapper,
                programDtos: prs
            }
        )

    }, [selectedPrograms])

    useEffect(()=> {

        let rms = selectedRooms.flatMap( selecteroom => {
            return rooms.filter(room => room.id === selecteroom.value);
        });


        console.log(rms);

     

            setTravelWrapper(
                {
                    ...travelWapper,
                    roomDtos: rms
                }
            )

        

        

    }, [selectedRooms])

    const optionsAc = airplaneCompanies.map( ac => (
        {
            label: ac.name,
            value: ac.name
        }
    ))

    const optionsPr = programs.map( pr => (
        {
            label: pr.name,
            value: pr.name
        }
    ))

    const optionsRooms = rooms.map( room => (
        {
            label: room.id,
            value: room.id
        }
    ))


    useEffect(()=>{

        fetchPrograms().then(res => setPrograms(res.data));
        fetchAirplaneCompanies().then(res => setAirplaneCompanies(res.data));
        fetchRooms().then(res => setRooms(res.data));

    }, [])

    useEffect(()=>{
        console.log(rooms)
    }, [rooms])


    useEffect(()=>{
        console.log(travelWapper)
    }, [travelWapper])
    


    const handleChange = (event) => {

        event.preventDefault();

      
        const {name, value} = event.target;
        const newValue =  value;

        setTravelWrapper( prevState => (
            {
                ...prevState,
                travelDto: {
                    ...prevState.travelDto,
                    [name]: newValue
                }
            }
        ))
    }


    const handleSubmit = async (e)=> {
    
        
        try {

            e.preventDefault();

            // validateForm();

            let newDeparture = travelWapper.travelDto.departure;

            let newTravelWrapper = {
                ...travelWapper,
                travelDto: {
                    ...travelWapper.travelDto,
                    departure: `${newDeparture}+00:00`
                }
            }

            let res = await createTravel(newTravelWrapper);

            console.log(res);


        }catch(error){

            console.log(error)

        }
        setOpen(false);
    }

    
  return (
    <div>
        
      <button className="bg-blue-200 rounded-lg text-black p-2" onClick={() => setOpen(true)}>
        Add Travel
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>

        <div className="text-center w-[39rem] h-[39rem] flex items-center justify-start pl-14">

        <form className='flex justify-center items-center flex-col space-y-3  items-start justify-start' onSubmit={handleSubmit}>
            <div className='flex'>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={travelWapper.travelDto.name}
                    onChange={handleChange}
                    className='border-2 rounded-lg p-1'
                />
            </div>
            <div>
                <label>Continent: </label>
                <input
                    type="text"
                    name="continent"
                    value={travelWapper.travelDto.continent}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            </div>

            <div className='flex'>
            <div>
                <label>Country: </label>
                <input
                    type="text"
                    name="country"
                    value={travelWapper.travelDto.country}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            <div>
                <label>Departure: </label>
                <input
                    type="datetime-local"
                    name="departure"
                    value={travelWapper.travelDto.departure}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            </div>

            <div className='flex'>
            <div>
                <label>Type: </label>
                <input
                    type="text"
                    name="type"
                    value={travelWapper.travelDto.type}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            <div>
                <label>Initial Price:</label>
                <input
                    type="number"
                    name="initialPrice"
                    value={travelWapper.travelDto.initialPrice}
                    onChange={handleChange}
                    className='border-2 rounded-lg p-1'
                />
            </div>
            </div>

            <div className='flex'>
            <div>
                <label>Discounted Price:</label>
                <input
                    type="number"
                    name="discountedPrice"
                    value={travelWapper.travelDto.discountedPrice}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            <div>
                <label>Group Size: </label>
                <input
                    type="number"
                    name="groupSize"
                    value={travelWapper.travelDto.groupSize}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>
            </div>


            
            <div>
                <label>Description: </label>
                <input
                    type="text"
                    name="description"
                    value={travelWapper.travelDto.description}
                    onChange={handleChange}
                    className='border-2 rounded-lg'
                />
            </div>


            <div className='flex'>
            <div>
                <label htmlFor='airplaneCompany'>AirplaneCompany: </label>
                <ReactSelect options={optionsAc} value={selectedAirplaneCompany} onChange={handleSelectAirplaneCompany} />

            </div>
            <div>
                <label htmlFor='programs'>Programs: </label>
                <ReactSelect isMulti options={optionsPr} value={selectedPrograms} onChange={handleSelectPrograms}/>

            </div>
            </div>

            <div className='flex'>
            <div>
                
                <label htmlFor='rooms'>Rooms: </label>
                <ReactSelect isMulti options={optionsRooms} value={selectedRooms} onChange={handleSelectedRooms}/>

            </div>
            <div>
                <label>Facilities</label>
                <input
                    type="text"
                    name="facilities"
                    value={travelWapper.travelDto.facilities}
                    onChange={handleChange}
                />
            </div>
            </div>


            <button className='p-2 bg-blue-600 rounded-lg text-blue-100' type="submit">Submit</button>
        </form>
        
        </div>

      </Modal>
    
      
    </div>
  )
}
