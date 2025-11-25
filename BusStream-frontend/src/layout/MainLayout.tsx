import Navbar from "../components/NavBar/NavBar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.tsx";

export default function MainLayout() {
    return (
            <div className={"container mx-auto bg-[var(--bg)] text-[var(--fg)]"}>

                <Navbar />

                <main className="py-5 transition-colors">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </main>

                <Footer />

            </div>
    );
}
