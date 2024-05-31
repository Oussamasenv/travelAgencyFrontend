import axios from "axios";




export const loginOperation = async (loginObject) => {


    try{

        console.log("check 2")
        const response = await axios.post(
            'http://localhost:8080/login', 
            loginObject,
            {
            headers: {
                'Content-Type': 'application/json',
              },
            }
        ).then ( res => {
            localStorage.setItem('token', res.data.token);
            console('enter valid info')

        }).catch ( err => console.log('enter valid info')
        )

        console.log(response.data.token);
        
    } catch (error) {
        console.log('enter valid info')
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




