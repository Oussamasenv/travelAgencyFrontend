import React from 'react'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AppModal from '../../components/AppModal'
import DisplayMessage from '../../components/DisplayMessage'

export default function AdminRoom() {
  return (
    <div className='flex'>
        <div>
            <SideBarAdmin />
        </div>
        <div>
            <h1>Rooms</h1>
           <AppModal />
            <h1>hhdhb</h1>
            <DisplayMessage />


        </div>
      
    </div>
  )
}
