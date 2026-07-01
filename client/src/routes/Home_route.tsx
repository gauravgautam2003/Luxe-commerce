import { Route, Routes } from "react-router-dom";
import Home_page from "../pages/Home_page";
import AI_search_page from "../pages/AI_search_page";



const homeRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home_page />} />
                <Route path="/ai-search" element={<AI_search_page />} />
            </Routes>
        </div>
    )
}

export default homeRoute