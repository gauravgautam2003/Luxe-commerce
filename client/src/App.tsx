import AppRoutes from "./routes/AppRoutes";
import AdminRoute from "./routes/ProtectedRoute";
import ProtectedRoute  from "./routes/ProtectedRoute";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <AdminRoute />
            <AppRoutes />
            <ProtectedRoute />
            <Footer />
        </div>
    )
}

export default App