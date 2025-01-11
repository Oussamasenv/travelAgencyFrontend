import axios from "axios";


export const saveRoom = async (roomData)=> {

    let token = localStorage.getItem("token");

    console.log("data: ", roomData);

    try {

        let response = await axios.post(
            `http://localhost:8080/admin/createRoom`,
            
                roomData
            , 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": 'multipart/form-data'
                }
            }
        )

        return response;

    } catch (error) {
        console.log(error)
    }
}