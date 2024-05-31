import React, { useState } from 'react'
import Modal from '../../Modal'


export default function ShowDetails({travel}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        
    <button className="bg-yellow-200 rounded-lg text-black p-2" onClick={() => setOpen(true)}>
      details...
    </button>

    <Modal open={open} onClose={() => setOpen(false)}>

      <div className="text-center w-96 h-96 flex items-center justify-center text-black">

        <div className='flex flex-col divide-y-4 space-y-2'>

          <div>
            <span>type: </span> {travel.type} </div>

          <div className=''><span>description: </span>{travel.description}
          </div>

          <div>

            <span>Initial price: </span> { travel.initialPrice }</div>

          <div>

            <span>Discounted price: </span>
            {
              travel.discountedPrice
            }

          </div>

          <div>

            <span>Availibility: </span>
            {
              travel.availibility
            }

          </div>

          <div>

            <span>Groupe size: </span>
            {
              travel.groupSize
            }

          </div>

          <div>

            <span>Places left: </span>
            {
              travel.placesLeft
            }

          </div>

          <div>

            <span>Airplane Company: </span>
            {
              travel.airplaneCompanies.map( ac => {
                return (
                  ac.name
                )
              })
            }

          </div>

          <div>

            <span>Programs : </span>
            {
              travel.programs.map( pr => {
                return (
                  pr.name
                )
              })
            }

          </div>

          <div>

            <span>Facilities : </span>
            {
              travel.facilities ? ( travel.facilities.map( fc => {

                return (
                  fc.name
                )

              })) : "no facilities for this travel"
            }
            

          </div>

        </div>
      
      </div>

    </Modal>
    
  </div>
  )
}
