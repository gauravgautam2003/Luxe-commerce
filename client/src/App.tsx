import Navbar from "./components/Navbar";
import HomeRoute from "./routes/Home_route";
import { useLocation } from "react-router-dom";



function App() {
    const location = useLocation();
    const hideNavbar = location.pathname === "/signup";

    return (
        <div className="App">
            {!hideNavbar && <Navbar />}
            <HomeRoute />
        </div>
    );
}

export default App;
