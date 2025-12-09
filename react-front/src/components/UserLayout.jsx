import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import NavigationLayout from "./NavigationLayout";

export default function UserLayout() {
    const {token} = useStateContext()
    if(!token) {
        return <Navigate to='/auth/login' />
    }
    return(
        <div>
            <NavigationLayout />
            <Outlet />
        </div>
    )
}