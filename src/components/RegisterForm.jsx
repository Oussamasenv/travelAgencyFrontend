import { useNavigate } from "react-router-dom"



export default function RegisterForm(props){

    const navigate = useNavigate();

    return (
        <>

        

        <form action="#">

            <h2 className='text-3xl mb-4 text-centefont-bold text-3xl text-[#002D74]'>Register</h2>
                    <p className='mb1 text-sm mt-4 text-gray-500'>Create your account. it is free only take couple of seconds.</p>

            
            <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="firstName" className="p-2 mt-8 rounded-xl border" />
                <input type="text" placeholder="lastName" className="p-2 mt-8 rounded-xl border " />
            </div>

            <div className="">
                <input type="text" placeholder="username" className="p-2 mt-4 rounded-xl border w-full" />
                
            </div>

            <div className="">
                <input type="email" placeholder="email" className="p-2 mt-4 rounded-xl border w-full" />

            </div>

            <div className="">
                <input type="number" placeholder="phoneNumber" className="p-2 mt-4 rounded-xl border w-full" />

            </div>

            <div className="">
                <input type="password" placeholder="password" className="p-2 mt-4 rounded-xl border w-full" />

            </div>

            <div className="mt-5">
                <input type="checkbox" className="border border-gray-400 m-2"/>
                <span>
                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
            </div>

            <div className="m-5 ">
                <button className="w-full bg-[#fde047] rounded-xl text-white p-2 hover:scale-105 duration-300 text-bold">Register</button>
                <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr class="border-gray-400" />
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-400" />
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Continue with Google
                </button>

                <div className="mt-5 text-center">
                <button onClick={() => navigate('/login')} className="">Already registred? click to login.</button>
                </div>

            </div>

            

            

            


        </form>
        
        
        </>
    )
}