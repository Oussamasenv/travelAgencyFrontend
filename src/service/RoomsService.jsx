import axios from "axios";

export const fetchRooms = async () => {

    let token = localStorage.getItem("token");

    try {

        let response = await axios.get(
            "http://localhost:8080/admin/rooms",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )

        return response;

    } catch(error) {
        console.log(error);
    }
}