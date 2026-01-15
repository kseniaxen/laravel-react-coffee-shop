import { Outlet } from "react-router-dom";
import NavigationLayout from './NavigationLayout';
import FooterLayout from "./FooterLayout";

export default function MenuLayout() {
    return(
        <>
            <NavigationLayout variant="light" textColor="black" absolute={false} />
            <Outlet/>
            <FooterLayout/>
        </>
    )
}
