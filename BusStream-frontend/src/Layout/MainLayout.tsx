import Navbar from "../components/NavBar/NavBar.tsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
