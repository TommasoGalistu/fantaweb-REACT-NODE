import { Outlet } from "react-router-dom";
import useAuth from "../../../hookCustom/useAuth";

function DashboardBoss(){
    const isAuthenticated = useAuth();
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default DashboardBoss;