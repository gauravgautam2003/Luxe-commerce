import { Route, Routes } from "react-router-dom";
import AI_page from "../pages/AI_page";



const User_route = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<AI_page />} />
        </Routes>
    </div>
  )
}

export default User_route