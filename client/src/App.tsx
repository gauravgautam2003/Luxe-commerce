import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import HomeRoute from "./routes/Home_route";
import { useLocation } from "react-router-dom";



function App() {
    const location = useLocation();
    const hideNavbar = location.pathname === "/signup";

    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {!hideNavbar && <Navbar />}
            <HomeRoute />
        </div>
    );
}

export default App;
