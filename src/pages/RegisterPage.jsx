import AuthenticationPage from "../components/AuthenticationPage";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/RegisterForm";

export default function RegisterPage(){
    return (
        <>
        <AuthenticationPage comp={<RegisterForm />} />
        </>
    )
}