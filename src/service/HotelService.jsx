import axios from "axios";


export const saveHotel = async (hotelData)=> {

    let token = localStorage.getItem("token");

    console.log("data: ", hotelData);


    try {

        let response = await axios.post(
            `http://localhost:8080/admin/createHotel`,
            
                hotelData
            , 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                    // "Content-Type": 'multipart/form-data'
                }
            }
        )

        return response;

    } catch (error) {
        console.log(error)
    }
}

export const getHotels = async ()=> {

    let token = localStorage.getItem("token");

    // console.log("data: ", hotelData);


    try {

        let response = await axios.get(
            `http://localhost:8080/admin/hotels`,
            
            {
                headers: {
                    Authorization: `Bearer ${token}`
                    // "Content-Type": 'multipart/form-data'
                }
            }
        )

        return response;

    } catch (error) {
        console.log(error)
    }
}