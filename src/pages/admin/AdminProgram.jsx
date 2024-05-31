import React from 'react'
import SideBarAdmin from '../../components/admin/SideBarAdmin'

const AdminProgram = () => {
  return (
    <div className='flex'> 
        <div>
            <SideBarAdmin />
        </div>
        <div className='m-6'>
            programs crud
        </div>
      
    </div>
  )
}

export default AdminProgram
