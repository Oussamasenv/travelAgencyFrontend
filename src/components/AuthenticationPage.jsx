import RegisterForm from "./RegisterForm";
import bgImage from '../assets/travelagency1-1.jpeg'
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";



export default function AuthenticationPage(props){

    const [page, setPage] = useState(
        {
            page:"",
            text1:"",
            text2: ""
        });

        useEffect(() => {
            if(props.login === true) {
                setPage(
                    {
                        page:"login",
                        text1:"Don't have an account?",
                        text2: " Create one."
                    }
                )
            } else {
                setPage(
                    {
                        page: "register",
                        text1: "Already registered?",
                        text2: "Login"
                    }
                )
            }

        }, [])

    // toggleText = () => {

    // }

    const togglePage = () => {
        setPage( prevPage => {
            if (prevPage.page === "Login"){
                return {
                    page: "Register",
                    text1: "Already registered?",
                    text2: " Login"
                };
            } else {
                return {
                    page: "Login",
                    text1: "Don't have an account?",
                    text2: " Create one."
                }
            }
        })
    }


    return (

        <>
        <div className="min-h-screen py-40" style={{
            backgroundImage: "linear-gradient(115deg, #38bdf8, #fee2e2)"
        }}>
            <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                
                <div className="w-full lg:w-1/2 flex flex-col item-center justify-center w-1/2 p-12 bg-no-repeat bg-cover bg-center object-none" style={{backgroundImage: `url(${bgImage})`}}>
                    <h1 className='text-white text-3xl mb-3'>Welcome</h1>
                    <div className="">
                        <p className='text-white'>upsom ...</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 pt-10 pb-6 px-12">
                    <h2 className='text-3xl mb-4 text-centefont-bold text-3xl text-[#002D74]'>{page.page}</h2>
                    <p className='mb1 text-sm mt-4 text-gray-500'>Create your account. it is free only take couple of seconds.</p>

                    {/* {page.page ==="Login" ? <LoginForm/> : <RegisterForm content={page.text}/>} 

                    <div className="flex text-center justify-center">
                        <p>{page.text1}</p><button onClick={togglePage}>{page.text2}</button> */}

                    
                {/* </div> */}

                    {props.comp}
                    
                </div>

                



            
                
            </div>

        </div>
            
        </div>
        </>



    )


}