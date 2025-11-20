import './App.css'
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import UserHomePage from "./pages/public/UserHomePage";
import RegisterPage from "./pages/account/RegisterPage";

function App() {
    return (
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<UserHomePage/>}></Route>

                    <Route path={'login'} element={<RegisterPage/>}></Route>
                </Route>
            </Routes>
    )
}

export default App
