import React, { useContext, useEffect, useState } from 'react'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import { fetchPrograms } from '../../service/ProgramService';
import AddModal from '../../components/modals/program/AddModal';
import { SearchContext } from '../../context/Context';

const AdminProgram = () => {

  const { programs, setPrograms } = useContext(SearchContext);
  const [ programsState, setProgramsState ] = useState([]);

  const getPrograms = async () => {

    let response = await fetchPrograms();
    
    response.data && setPrograms(
      response.data
    ) 
    
  }

  useEffect(()=> {
    getPrograms();
  }, [])

  useEffect(()=>{

    console.log(programs)

  }, [programs])




  return (

    <div className='flex'> 
        <div>
            <SideBarAdmin />
        </div>

        <div className="flex justify-center w-full h-full h-screen bg-gray-200">
            <div className="m-16 mt-20">
            <div className="pl-6 pr-6 flex m-4 justify-between bg-white rounded-2xl text-xl p-2">
                <div>filter</div>
                <AddModal />
                

            </div>
            <div className="mt-8 w-full h-[34rem] overflow-auto rounded-2xl p-2">
            
            <table className="shadow-lg bg-white border-collapse w-full rounded-2xl">
                <thead>
                <tr>
                    <th className="bg-blue-100 border text-left w-2 px-6 py-4">id</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">ProgramName</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">description</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">duration</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">destination</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Action</th>

                </tr>
                </thead>

                <tbody>

                  {

                    programs && programs.map( program => {
                      return (
                        
                        <tr key={program.id} className="hover:bg-gray-50 font-semibold">

                          <td className="border px-6 py-4 w-2">{program.id}</td>
                          <td className="border px-6 py-4 w-2">{program.name}</td>
                          <td className="border px-6 py-4 w-2">{program.description}</td>
                          <td className="border px-6 py-4 w-2">{program.duration}</td>
                          <td className="border px-6 py-4 w-2">{program.destination}</td>
           
                        </tr>

                      )
                    })

                  }
                
                
                </tbody>

                </table>
                </div>
          
            </div>
            </div>

       
        
      
    </div>
  )
}

export default AdminProgram
