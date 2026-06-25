import Navbar from "./components/Navbar";
import UserRoute from "./routes/User_route";
import AI_route from "./routes/AI_route";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AI_route />
      <UserRoute />
    </div>
  );
}

export default App;