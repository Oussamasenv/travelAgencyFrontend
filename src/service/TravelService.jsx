import axios from "axios"



export const fetchTravels = async (params) => {



        // let token = localStorage.getItem("token");

        // console.log(params.name)

   
        let response = await axios.get(
                `http://localhost:8080/admin/travelsPages?name=${params.name}&pageNumber=${params.pageNumber}&pageSize=${params.pageSize}&sortDirection=${params.sortDirection}&sortBy=${params.sortBy}`
        )
        
        return response.data;
}

export const deleteTravel = async (id) => {

        let token = localStorage.getItem("token");

        let response = await axios.delete(
                `http://localhost:8080/admin/travels/${id}` , 
                {
                        headers: {
                                Authorization: `Bearer ${token}`
                        }
                }
        )


        return response;
}


export const createTravel = async (travel) => {

        let token = localStorage.getItem("token");

        try {

        let response = await axios.post(
                `http://localhost:8080/admin/createTravel`,
                travel,
                {
                        headers: {
                                Authorization: `Bearer ${token}`
                        }
                }    
        )

        return response;

        } catch(error) {

                console.log(error);

        }

}