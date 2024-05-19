import axios from "axios"
import { useState } from "react"


export default function HomePage() {

    const [airp, setAirp] = useState();


    axios.get("http://localhost:8080/airplaneCompanies ",
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }
    ).then ( resp => setAirp(resp))
    .catch ( err => console.log(err));




    return (
        <>
        <div className="flex h-screen bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-around">
            <div className="bg-yellow-300 m-4">login</div>
            <div className="bg-green-400">register</div>
        </div>

        </>
    )
}

