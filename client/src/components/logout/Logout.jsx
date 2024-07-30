import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"

export default function Logout() {
    const { Logout } = useAuthContext();

    Logout(); //local logout

    //TODO: logout from server

    return <Navigate to='/' />
}