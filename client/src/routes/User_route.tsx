import { Route, Routes } from "react-router-dom";
import SignupPage from "../pages/Signup_page";



const userRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
    )
}

export default userRoute