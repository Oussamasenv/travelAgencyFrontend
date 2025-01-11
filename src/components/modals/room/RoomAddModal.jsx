// import React, { useEffect, useState } from 'react'
// import Modal from '../../Modal'


// export default function RoomAddModal({changeRoomDto}) {

//     const [open, setOpen] = useState(false)
    
//     const [ roomDto, setRoomDto ] = useState(
//       {
//         roomNumber: 0,
//         pricePerNight: 0,
//         files: []
//       }
//     )

//     const handleChange = (event) => {
//         const { name, value, files } = event.target;
    
//         if (name === "files") {
//           setRoomDto((prevState) => ({
//             ...prevState,
//             files: Array.from(files), // Store files as an array of File objects
//           }));
      //   } else {
      //     setRoomDto((prevState) => ({
      //       ...prevState,
      //       [name]: value,
      //     }));
      //   }
      // };

//       const handleSubmit = () => {
//         const formData = new FormData();
//         formData.append("roomNumber", roomDto.roomNumber);
//         formData.append("pricePerNight", roomDto.pricePerNight);
//         roomDto.files.forEach((file) => {
//           formData.append("roomFiles", file); // Append each file individually
//         });
    
//         changeRoomDto(formData); // Pass the FormData object to the parent
//         setOpen(false);
//       };

    

//     useEffect(()=>{
//         console.log(roomDto)
//     },[roomDto])


//   return (
//     <div>
//         <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
//         + room
//         </button>

//         <Modal open={open} onClose={() => setOpen(false)}>
//           <div>

                // <div>
                //     <label>room number: </label>
                //     <input
                //         type="number"
                //         name='roomNumber'
                //         onChange={handleChange}
                //         className='border-2 rounded-lg p-1'
                 
                //     />
                // </div>

                // <div>
                //     <label>base price per day: </label>
                //     <input
                //         type="number"
                //         name='pricePerNight'
                //         onChange={handleChange}
                //         className='border-2 rounded-lg p-1'
                 
                //     />
                // </div>

//                 <div className='mb-10'>
//                     <label>pictures: </label>
//                     <input
//                         type="file"
//                         name='files'
//                         className='border-2 rounded-lg p-1'
//                         multiple
//                         onChange={handleChange}
                        
//                     />
//                 </div>


//                 <button onClick={handleSubmit} className='bg-cyan-200 p-2 rounded-xl'>save room</button>

//                 </div>



//         </Modal>

      
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { saveProgram } from '../../../service/ProgramService'
import { getHotels } from '../../../service/HotelService'
import { saveRoom } from '../../../service/RoomService'


export default function AddModal() {

    const [open, setOpen] = useState(false)
    const [ formData, setFormData ] = useState(
        {
          roomNumber: 0,
          hotelId: null,
          pricePerNight: 0,
            
            files: []
        }
    )
    const [hotels, setHotels] = useState([])

    const fetchHotels = async ()=>{
    
        let fetchedHotels = await getHotels();
        setHotels(
    
          fetchedHotels.data
    
        )
    
      }
    
      useEffect(()=>{
    
        fetchHotels();
    
      }, [])

    const handleChange = (event) => {

        event.preventDefault();
        let { name, value, files } = event.target;

        if ( name === 'files') {
            setFormData( prevFormData => (
                {
                    ...prevFormData,
                    files: [...prevFormData.files, ...Array.from(files)]
                }
            ))
        } else {
          setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
      };


    const handleSubmit = async (event)=> {

        event.preventDefault();
        const data = new FormData();

        data.append('roomNumber', formData.roomNumber);
        data.append('pricePerNight', formData.pricePerNight);
        data.append('hotelId', formData.hotelId);
        

        for(let i = 0; i < formData.files.length; i++) {
            data.append('files', formData.files[i])
        }

        for (let [key, value] of data.entries()) {
            console.log(key, value);
          }

        try {
            const respnse = await saveRoom(data);
            console.log(respnse);
        } catch (error) {

            console.log('Error uploading files:', error)
        }

        setOpen(false)

       
    }

    useEffect(()=>{
        console.log(formData);
    }, [formData])

  return (
    <div>
        <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + Room
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>

        <div className="text-center w-[39rem] h-[39rem] flex items-center justify-start pl-14">

            <form onSubmit={handleSubmit} className='flex flex-col  items-start justify-start'>
                

                <div>
                    <label>room number: </label>
                    <input
                        type="number"
                        name='roomNumber'
                        onChange={handleChange}
                        className='border-2 rounded-lg p-1'
                 
                    />
                </div>

                <div>
                    <label>base price per day: </label>
                    <input
                        type="number"
                        name='pricePerNight'
                        onChange={handleChange}
                        className='border-2 rounded-lg p-1'
                 
                    />
                </div>
                

                <div className='mb-4'>
                    <label>pictures: </label>
                    <input
                        type="file"
                        name="files"
                        className='border-2 rounded-lg p-1'
                        multiple
                        onChange={handleChange}
                    />
                </div>

                {/* <div>
                    <label>choose hotel : </label>
                    <select id='hotelId' className='text-sm' defaultValue="" onChange={handleChange} value={formData.hotelId}>
                    <option value="" disabled>
                      Choose a hotel
                    </option>
                      {
                        hotels && hotels.map((hotel, index) => {
                          return(
                            <option  key={index} value={hotel.id} name="hotelId" >{hotel.name}</option>
                          )
                        })
                      }
                    </select>
                </div> */}

<div>
              <label>Choose hotel: </label>
              <select
                name="hotelId" // Ensure the name matches the key in formData
                className="text-sm"
                value={formData.hotelId || ''} // Bind value to formData.hotelId
                onChange={handleChange} // Handle changes
              >
                <option value="" disabled>
                  Choose a hotel
                </option>
                {hotels &&
                  hotels.map((hotel) => (
                    <option key={hotel.id} value={hotel.id}>
                      {hotel.name}
                    </option>
                  ))}
              </select>
            </div>

                <div className='flex mb-6 space-x-4 text-sm font-semibold'>                {
                  formData.files && formData.files.map((file,index)=>{
                    return(
                      
                        <p key={index}>{file.name}</p>
                      
                    )
                  })
                }
                </div>


                <button className='p-2 rounded-lg bg-cyan-100' type='submit'>save Room</button>

                {/* {
                    formData.files && formData.files.map( files => {
                        return (
                            <p>{files.name}</p>
                        )
                    })
                } */}



                

            </form>

        </div>


        </Modal>

      
    </div>
  )
}