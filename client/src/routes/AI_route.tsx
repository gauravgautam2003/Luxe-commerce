import { Route, Routes } from "react-router-dom";
import AI_search_page from "../pages/AI_search_page";



const AI_Route = () => {
    return (
        <div>
            <Routes>
                <Route path="/search" element={<AI_search_page />} />
            </Routes>
        </div>
    )
}

export default AI_Route