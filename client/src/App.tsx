import Navbar from "./components/Navbar";
import UserRoute from "./routes/User_route";
import HomeRoute from "./routes/Home_route";
import { useLocation } from "react-router-dom";
import AI_Route from "./routes/AI_route";


function App() {
    const location = useLocation();
    const hideNavbar = location.pathname === "/signup";

    return (
        <div className="App">
            {!hideNavbar && <Navbar />}
            <AI_Route />
            <HomeRoute />
            <UserRoute />
        </div>
    );
}

export default App;
