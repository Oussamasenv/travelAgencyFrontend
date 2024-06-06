import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { saveProgram } from '../../../service/ProgramService'
import Travel from '../../../pages/Travel'


export default function AddModal() {

    const [open, setOpen] = useState(false)
    const [ formData, setFormData ] = useState(
        {
            name: '',
            description: '',
            duration: 0,
            destination: '',
            files: []
        }
    )

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

            value = ( name === 'duration' ? (value ? parseInt(value, 10) : 0) : value);
            setFormData( prevFormData => (
                {
                    ...prevFormData,
                    [name]: value
                }
            ))
        }

    }


    const handleSubmit = async (event)=> {

        event.preventDefault();
        const data = new FormData();

        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('duration', formData.duration);
        data.append('destination', formData.destination);

        for(let i = 0; i < formData.files.length; i++) {
            data.append('files', formData.files[i])
        }

        for (let [key, value] of data.entries()) {
            console.log(key, value);
          }

        try {
            const respnse = await saveProgram(data);
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
        + progam
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>

        <div className="text-center w-[39rem] h-[39rem] flex items-center justify-start pl-14">

            <form onSubmit={handleSubmit} className='flex flex-col  items-start justify-start'>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        className='border-2 rounded-lg p-1'
                        value={formData.name}
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>description: </label>
                    <input
                        type="text"
                        name="description"
                        className='border-2 rounded-lg p-1'
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>duration: </label>
                    <input
                        type="number"
                        name="duration"
                        className='border-2 rounded-lg p-1'
                        value={formData.duration === 0 ? '' : formData.duration}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>destination: </label>
                    <input
                        type="text"
                        name="destination"
                        className='border-2 rounded-lg p-1'
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-10'>
                    <label>pictures: </label>
                    <input
                        type="file"
                        name="files"
                        className='border-2 rounded-lg p-1'
                        multiple
                        onChange={handleChange}
                    />
                </div>

                <button className='p-2 rounded-lg bg-cyan-100' type='submit'>save Program</button>

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
