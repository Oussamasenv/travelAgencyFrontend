import React, { useState } from 'react'
import Modal from '../../Modal'


export default function AddTravelers() {

    const [open, setOpen] = useState(false)




  return (
    <div>
        <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + rooms
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>

            <div className='w-full h-full p-6 flex flex-col space-y-4 items-start'>

                <span>Choisir vos Chambres:</span>


            </div>


        </Modal>

      
    </div>
  )
}
