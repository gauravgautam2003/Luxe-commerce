import { Route, Routes } from "react-router-dom";
import Signup_page from "../pages/Signup_page";



const User_route = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<Signup_page />} />
        </Routes>
    </div>
  )
}

export default User_route