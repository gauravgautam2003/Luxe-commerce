import { Route, Routes } from "react-router-dom";
import Home_page from "../pages/Home_page";



const homeRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home_page />} />
            </Routes>
        </div>
    )
}

export default homeRoute