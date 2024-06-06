import React, { useState } from 'react'
import Modal from '../../Modal'


export default function AddTravelers() {
    const [open, setOpen] = useState(false)




  return (
    <div>
        <button className="bg-cyan-100 rounded-lg p-2" onClick={() => setOpen(true)}>
        + travelers
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>


      </Modal>

      
    </div>
  )
}
