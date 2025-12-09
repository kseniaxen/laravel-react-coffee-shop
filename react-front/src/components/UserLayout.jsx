import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import NavigationLayout from "./NavigationLayout";
import FooterLayout from "./FooterLayout";

export default function UserLayout() {
    const { token } = useStateContext()
    if (!token) {
        return <Navigate to='/auth/login' />
    }
    return (
        <div className="layout">
            <NavigationLayout variant="light" textColor="black" absolute = {false} />
            <div className="coffee-type content">
                <Outlet />
            </div>
            <FooterLayout/>
        </div>
    )
}