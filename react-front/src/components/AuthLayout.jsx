import { Outlet, Navigate  } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";

export default function AuthLayout() {
    const {token} = useStateContext()
    if(token) {
        return <Navigate to='/' />
    }
    return(
        <div>
            <Outlet />
        </div>
    )
}