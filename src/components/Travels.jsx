import axios from "axios";
import { useEffect, useState } from "react"

export default function Travels(){

    const [ travels, setTravels ] = useState([]);

    const fetchTravels = async (token) => {
        

            await axios.get("http://localhost:8080/admin/travels",
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
            
        ).then ( res => {
            setTravels(res.data);
        }).catch ( err => {
            console.log(err);
        })
        
    }


        useEffect( ()=> {

            let token = localStorage.getItem("token");

            fetchTravels(token);

            console.log(token)

        },[])


        useEffect( ()=> {
            console.log(travels)
        }, [travels])

        
    return (
        <>
 
 
            {travels.map((travel) => (
            <>
                <h1 key={travel.id}>{travel.airplaneCompany.name}</h1>
                {travel.programs.map((program) => (
                <h1 key={program.id}>{program.name}</h1>
                ))}
            </>
            ))}


        </>
    )
}