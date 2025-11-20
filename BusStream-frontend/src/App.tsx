import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>

                </Route>
            </Routes>
        </Router>
    )
}

export default App
