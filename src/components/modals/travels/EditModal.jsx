import React, { useState } from 'react'
import Modal from '../../Modal'
import { Alert } from '@mui/material'

export default function EditModal() {
    const [open, setOpen] = useState(false)

  return (
    <div>
        
      <button className="bg-blue-200 rounded-lg text-black p-2" onClick={() => setOpen(true)}>
        Edit
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>

        <div className="text-center w-96 h-96 flex items-center justify-center">

            <Alert severity='info' sx={{fontSize: 20}}>you cant edit a travel after creation</Alert>

        
        </div>

      </Modal>
    
      
    </div>
  )
}
