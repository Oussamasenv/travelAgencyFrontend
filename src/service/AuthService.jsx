import axios from "axios";




export const loginOperation = async (loginObject) => {

    try {
        console.log("check 2")

        const response = await axios.post(
            'http://localhost:8080/login', 
            loginObject,
            {
            headers: {
                'Content-Type': 'application/json',
              },
            }
        )

        localStorage.setItem('token', response.data.token);

        return response;

    } catch ( error ) {
        console.log(error);
    }

}


export const registerOperation = async (registerObject) => {

    try{
        const response = await axios.post(
            'http://localhost:8080/register', 
            registerObject
        );

        localStorage.setItem('token', response.data.token);
        console.log(registerObject);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }

    
    
}




