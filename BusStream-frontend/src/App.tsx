import './App.css'
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import UserHomePage from "./pages/public/UserHomePage";
import RegisterPage from "./pages/account/RegisterPage";
import NotFoundPage from "./pages/common/NotFoundPage.tsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<UserHomePage/>}></Route>

                    <Route path={'register'} element={<RegisterPage/>}></Route>
                </Route>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
    )
}

export default App
