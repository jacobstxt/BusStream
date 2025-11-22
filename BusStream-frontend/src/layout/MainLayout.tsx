import Navbar from "../components/NavBar/NavBar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.tsx";

export default function MainLayout() {
    return (
        <>
            <div className={"container mx-auto"}>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
            </div>
        </>
    );
}
