import AuthenticationPage from "../components/AuthenticationPage";
import LoginForm from "../components/LoginForm";

export default function LoginPage(){
    return (
        <>
        <AuthenticationPage comp={<LoginForm />} />
        </>
    )
}