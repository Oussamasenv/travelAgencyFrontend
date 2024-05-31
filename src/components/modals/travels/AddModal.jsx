import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { fetchPrograms } from '../../../service/ProgramService'
import { fetchAirplaneCompanies } from '../../../service/AirPlaneCompanyService'
import { createTravel } from '../../../service/TravelService'
import Multiselect from 'multiselect-react-dropdown'
import ReactSelect from 'react-select'

export default function AddModal() {

    const [open, setOpen] = useState(false)
    const [programs, setPrograms ] = useState([])
    const [ airplaneCompanies, setAirplaneCompanies ] = useState([]);
    const [ travel, setTravel ] = useState({
        name: '',
        continent: '',
        country: '',
        departure: '',
        type: '',
        initialPrice: 0,
        discountedPrice: 0,
        groupSize: 0,
        airplaneCompanies: [],
        programs: [],
        facilities: []
    });

    const options = programs.map( option => (
        {
            label: option.name,
            value: option.name
        }
    )
    )


    useEffect(()=>{

        fetchPrograms().then(res => setPrograms(res.data));
        fetchAirplaneCompanies().then(res => setAirplaneCompanies(res.data));

    }, [])

    useEffect(()=>{
        console.log(programs);
        console.log(airplaneCompanies);
        console.log(travel)
        let newAirplaneCompanies = [...travel.airplaneCompanies, ...airplaneCompanies];
        let newPrgrams = [...travel.programs, ...programs];
        
        setTravel(
            {
                ...travel,
                airplaneCompanies: newAirplaneCompanies,
                programs: newPrgrams
            }
        )

    }, [airplaneCompanies, programs]) //these dont change shouldnt reply on them

    useEffect(()=>{
        console.log(travel)
    },  [travel])


    const handleChange = (event) => {

        event.preventDefault();

      
        const {name, value} = event.target;
        const newValue =  value;

        setTravel({
            ...travel,
            [name]: newValue
        })
    };


    const handleSubmit = async (e)=> {
    
        try {

            e.preventDefault();

            // validateForm();

            let res = await createTravel(travel);

            console.log(res);

            // console.log(travel);

        }catch(error){

            console.log(error)

        }
    }


    const [optionsPr] = useState(programs);
    
  return (
    <div>
        
      <button className="bg-blue-200 rounded-lg text-black p-2" onClick={() => setOpen(true)}>
        Add Travel
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>

        <div className="text-center w-[30rem] h-[30rem] flex items-center justify-center">

        <form className='flex flex-col space-y-2 divide-y-2 items-start justify-start' onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={travel.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Continent: </label>
                <input
                    type="text"
                    name="continent"
                    value={travel.continent}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Country: </label>
                <input
                    type="text"
                    name="country"
                    value={travel.country}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Departure: </label>
                <input
                    type="date"
                    name="departure"
                    value={travel.departure}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Type: </label>
                <input
                    type="text"
                    name="type"
                    value={travel.type}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Initial Price:</label>
                <input
                    type="number"
                    name="initialPrice"
                    value={travel.initialPrice}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Discounted Price:</label>
                <input
                    type="number"
                    name="discountedPrice"
                    value={travel.discountedPrice}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Group Size: </label>
                <input
                    type="number"
                    name="groupSize"
                    value={travel.groupSize}
                    onChange={handleChange}
                />
            </div>
            <div>
                
                <label htmlFor='airplaneCompany'>AirplaneCompany: </label>
                <select name='airplaneCompany'>
                    {
                        airplaneCompanies.map( ac => {
                            return (
                                <option onChange={handleChange} key={ac.id} value={airplaneCompanies}>{ac.name}</option>
                            )
                        }
                        )
                    }
                </select>
            </div>
            <div>
                
                <ReactSelect isMulti options={options} selectedValues={programs}/>

            </div>
            <div>
                <label>Facilities</label>
                <input
                    type="text"
                    name="facilities"
                    value={travel.facilities}
                    onChange={handleChange}
                />
            </div>
            <button className='p-2 bg-blue-600 rounded-lg text-blue-100' type="submit">Submit</button>
        </form>
        
        </div>

      </Modal>
    
      
    </div>
  )
}
