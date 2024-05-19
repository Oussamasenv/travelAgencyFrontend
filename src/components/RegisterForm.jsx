import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { registerOperation } from "../service/AuthService";



export default function RegisterForm(props){

    const[register, setFormData] = useState(
        
        {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            phoneNumber: '',
            password: ''

        }
    );

    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [validForm, setValidForm] = useState(false);


    const validateForm = () => {

        let formIsValid = true;
        let errors = {};

        if(!register.username) {
            formIsValid = false;
            errors['username'] = 'Username is required'
        }

        if(!register.email) {
            formIsValid = false;
            errors['email'] = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(register.email)) {

            formIsValid = false;
            errors['email'] = 'Email is not valid';

        }

        if (!register.password) {
            formIsValid = false;
            errors['password'] = 'Password is required';
        } else if (register.password.length < 8) {
            formIsValid = false;
            errors['password'] = 'Password must be at least 8 characters long';
        }

        if(!register.firstName) {
            formIsValid = false;
            errors['firstName'] = 'First name is required';
        }

        if(!register.lastName) {
            formIsValid = true;
            errors['lastName'] = 'Last name is required';
        }

        if(!register.phoneNumber) {
            formIsValid = false;
            errors['phoneNumber'] = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(register.phoneNumber)) {
            formIsValid = false;
            errors['phoneNumber'] = 'Phone number must be 10 digits long and contain only numbers';
        }

        if (terms === false) {
            formIsValid = false;
            errors['terms'] = 'please accept terms of use'
        }

        setErrors(errors);
        setValidForm(formIsValid);

        };

        const handleChange = (event) => {
            event.preventDefault();
            setFormData({...register, [event.target.name]: event.target.value});
        };

        const handleSubmit = (event) => {
            console.log("check 1")
            event.preventDefault();

            validateForm();
            // if (validForm) {
                console.log('Form is valid, submit data: ', register, validateForm());
                registerOperation(register);
        // };

    }

    const handleCheckedChange = () => {
        setTerms(!terms);
    }

    useEffect( ()=> {
        console.log("login:", register, ", terms:", terms);
    }, [register, terms])

    

    const { firstName, lastName, username, email, phoneNumber, password} = register;



    const navigate = useNavigate();

    return (
        <>

        

        <form onSubmit={handleSubmit}>

            <h2 className='text-3xl mb-4 text-centefont-bold text-3xl text-[#002D74]'>Register</h2>
                    <p className='mb1 text-sm mt-4 text-gray-500'>Create your account. it is free only take couple of seconds.</p>

            
            <div className="grid grid-cols-2 gap-5">

                <input name="firstName" value={firstName} type="text" placeholder="firstName" className="p-2 mt-8 rounded-xl border" onChange={handleChange} />
                {errors.firstName && <p>{errors.firstName}</p>}

                <input name="lastName" value={lastName} type="text" placeholder="lastName" className="p-2 mt-8 rounded-xl border " onChange={handleChange} />
                {errors.lastName && <p>{errors.lastName}</p>}

            </div>

            <div className="">

                <input name="username" value={username} type="text" placeholder="username" className="p-2 mt-4 rounded-xl border w-full" onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
                
            </div>

            <div className="">

                <input name="email" value={email} type="email" placeholder="email" className="p-2 mt-4 rounded-xl border w-full" onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}

            </div>

            <div className="">

                <input name="phoneNumber" value={phoneNumber} type="tel" placeholder="phoneNumber" className="p-2 mt-4 rounded-xl border w-full" onChange={handleChange}/>
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}


            </div>

            <div className="">

                <input name="password" value={password} type="password" placeholder="password" className="p-2 mt-4 rounded-xl border w-full" onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}


            </div>

            <div className="mt-5">
                <input name="terms" value = { terms } type="checkbox" className="border border-gray-400 m-2" onChange={handleCheckedChange}/>
                <span>
                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
            </div>

            <div className="m-5 ">
                <button className="w-full bg-[#fde047] rounded-xl text-white p-2 hover:scale-105 duration-300 text-bold">Register</button>
                <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
            </div>

            <button type="submit" className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Continue with Google
                </button>

                <div className="mt-5 text-center">
                <button type="submit" onClick={() => navigate('/login')} className="">Already registred? click to login.</button>
                </div>

            </div>


        </form>
        
        
        </>
    )
}
