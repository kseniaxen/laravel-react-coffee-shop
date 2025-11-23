import { Outlet, Navigate  } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import NavigationLayout from "./NavigationLayout";

export default function AuthLayout() {
    const {token} = useStateContext()
    if(token) {
        return <Navigate to='/' />
    }
    return(
        <div>
            <NavigationLayout />
            <Outlet />
        </div>
    )
}