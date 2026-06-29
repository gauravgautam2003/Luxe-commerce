import { Route, Routes } from "react-router-dom";
import AiSearchPage from "../pages/AI_search_page";



const userRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AiSearchPage />} />
            </Routes>
        </div>
    )
}

export default userRoute