import { Route, Routes } from "react-router-dom";
import AI_search_page from "../pages/AI_search_page";



const User_route = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<AI_search_page />} />
        </Routes>
    </div>
  )
}

export default User_route