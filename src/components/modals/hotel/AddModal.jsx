import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import RoomAddModal from '../room/RoomAddModal'
import { saveHotel } from '../../../service/HotelService'


export default function AddModal() {

    const [open, setOpen] = useState(false);
    const [ request , setRequest ] = useState(new FormData());
    const [ formData, setFormData] = useState(
      {
        hotelDto:{

        },
        roomDtos: []
      }
    )

    const [ hotelDtoObj, setHotelDtoObj ] = useState(
      {
        name: "",
        location: "",
        stars: 0,
        files: [],
        roomsNumber: 0

      }
    )
    
    const [ roomDto, setRoomDto ] = useState(
      {

      }
      
    )

    const changeRoomDto = (data)=> {
      setRoomDto(
        data
      )
    }

    useEffect(()=>{

      if (roomDto instanceof FormData) {
        for (let [key, value] of roomDto.entries()) {
          console.log(key, value);
        }

        setFormData(
          {
            ...formData,
            roomDtos: [...formData.roomDtos, roomDto]
          }
        )


      }

    }
        , [roomDto])


       const handleChange = (event)=> {

        event.preventDefault();
        let { name, value, files } = event.target;

        if (name === "files") {

            setHotelDtoObj( prevState => (
                {
                    ...prevState,
                    files: [...prevState.files, Array.from(files)]
                }
            )

            )

        } else if (name === "stars" || name === "roomsNumber") {
            setHotelDtoObj((prevState) => ({
             ...prevState,
              [name]: parseFloat(value), // or parseInt(value, 10) for integers
            }));
          } else {
            setHotelDtoObj( prevState => (
                {
                    ...prevState,
                    [name]: value
                }
            ) 
        )
        }

    }


    useEffect(()=>{

      let hotel = saveChanges();
      setFormData(
        {
          ...formData,
          hotelDto: hotel
        }
      )

    }, [hotelDtoObj])

    const saveChanges = () => {

      let hotel = new FormData();
      
      hotel.append("name", hotelDtoObj.name);
      hotel.append("location", hotelDtoObj.location);
      hotel.append("stars", hotelDtoObj.stars);
      hotel.append("roomsNumber", hotelDtoObj.roomsNumber);
    

      for(let i = 0; i < hotelDtoObj.files.length; i++) {
            hotel.append('files', hotelDtoObj.files[i])
      }


      return hotel;
    }


    useEffect(()=>{

      const updatedRequest = new FormData();
      updatedRequest.append("hotelDto", formData.hotelDto);
      updatedRequest.append("roomDtos", formData.roomDtos);
      setRequest(updatedRequest);

    }, [formData])

    useEffect(()=>{
      for (let [key, value] of request.entries()) {
        console.log(key, value);
      }    
    }, [request])

    const handleSubmit = async ()=> {
      
      const response = await saveHotel(request);
      console.log(response)
      
      }



    useEffect(()=>{
      console.log(formData)
    }, [formData])



  return (
    <div>
        <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + hotel
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div>

                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name='name'
                        className='border-2 rounded-lg p-1'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>location: </label>
                    <input
                        type="text"
                        name='location'
                        className='border-2 rounded-lg p-1'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>stars: </label>
                    <input
                        type="number"
                        name='stars'
                        className='border-2 rounded-lg p-1'
                        onChange={handleChange}
                    />
                </div>

                <div className=''>
                    <label>rooms number: </label>
                    <input
                        type="number"
                        name='roomsNumber'
                        className='border-2 rounded-lg p-1'
                        multiple
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-10'>
                    <label>pictures: </label>
                    <input
                        type="file"
                        name='files'
                        className='border-2 rounded-lg p-1'
                        multiple
                        onChange={handleChange}
                    />
                </div>

                <RoomAddModal changeRoomDto={changeRoomDto}/>


                <button onClick={handleSubmit} className='mt-4 bg-cyan-200 p-2 rounded-xl'>save hotel</button>

                </div>



        </Modal>

      
    </div>
  )
}
