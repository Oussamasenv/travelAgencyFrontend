import React, { useEffect, useState } from 'react'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AddModal from '../../components/modals/hotel/AddModal'
import RoomAddModal from '../../components/modals/room/RoomAddModal'
import { getHotels } from '../../service/HotelService'

export default function AdminHotel() {
  const [ hotels, setHotels ] = useState([])

  const fetchHotels = async ()=>{

    let fetchedHotels = await getHotels();
    setHotels(

      fetchedHotels.data

    )

  }

  useEffect(()=>{

    fetchHotels();

  }, [])

  useEffect(()=>{
    console.log(hotels)
  }, [hotels])


  return (
    <div className='flex'>
        <div>
          <SideBarAdmin />
        </div>
        <div className='w-full h-full p-20 bg-gray-100 h-screen'>
          <div className="flex justify-between bg-white rounded-lg p-4 text-xl">
                <div>filter</div>
                {/* <div>add</div> */}
                <AddModal />

                

          </div>

          <div className="mt-8 w-full h-[34rem] overflow-auto rounded-2xl p-2 flex flex-col">
            
            <table className="shadow-lg bg-white border-collapse w-full rounded-2xl">
                <thead>
                <tr>
                    <th className="bg-blue-100 border text-left w-2 px-6 py-4">id</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">hotel name</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">location</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">stars</th>
                    {/* <th className="bg-blue-100 border text-left px-8 py-4">destination</th> */}
                    <th className="bg-blue-100 border text-left px-8 py-4">Action</th>

                </tr>
                </thead>

                <tbody>

                  {

                    hotels && hotels.map( hotel => {
                      return (
                        
                        <tr key={hotel.id} className="hover:bg-gray-50 font-semibold">

                          <td className="border px-6 py-4 w-2">{hotel.id}</td>
                          <td className="border px-6 py-4 w-2">{hotel.name}</td>
                          <td className="border px-6 py-4 w-2">{hotel.location}</td>
                          <td className="border px-6 py-4 w-2">{hotel.stars}</td>
                          {/* <td className="border px-6 py-4 w-2">{program.destination}</td> */}
           
                        </tr>

                      )
                    })

                  }
                
                
                </tbody>

                </table>
                </div>
          

        </div>


        
      
    </div>
  )
}
