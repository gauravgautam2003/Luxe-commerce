import Navbar from "./components/Navbar";
import UserRoute from "./routes/User_route";
import AI_route from "./routes/AI_route";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signup";
  
  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <AI_route />
      <UserRoute />
    </div>
  );
}

export default App;
