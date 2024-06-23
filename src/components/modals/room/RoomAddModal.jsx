import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'


export default function RoomAddModal(props) {

    const [open, setOpen] = useState(false)
    
    const [ roomDto, setRoomDto ] = useState(
      {
        roomNumber: 0,
        pricePerNight: 0,
        files: []
      }
    )

    const handleSubmit = ()=> {

        // let room = new FormData();
        // room.append("roomNumber", roomDto.roomNumber);
        // room.append("pricePerNight", roomDto.pricePerNight);
        // for(let i = 0; i < roomDto.files.length; i++) {
        //     room.append('files', roomDto.files[i])
        // }
        
        props.changeRoomDto(roomDto);
        setOpen(false);

    }

    const handleChange = (event)=> {

        event.preventDefault();
        let { name, value, files } = event.target;

        if (name === "files") {

            setRoomDto( prevState => (
                {
                    ...prevState,
                    files: [...prevState.files, Array.from(files)]
                }
            )

            )

        } else if (name === "roomNumber" || name === "pricePerNight") {
            setRoomDto((prevState) => ({
             ...prevState,
              [name]: parseFloat(value), // or parseInt(value, 10) for integers
            }));
          } else {
            setRoomDto( prevState => (
                {
                    ...prevState,
                    [name]: value
                }
            ) 
        )
        }

    }

    useEffect(()=>{
        console.log(roomDto)
    },[roomDto])


  return (
    <div>
        <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + room
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div>

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


                <button onClick={handleSubmit} className='bg-cyan-200 p-2 rounded-xl'>save room</button>

                </div>



        </Modal>

      
    </div>
  )
}
