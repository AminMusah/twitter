import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Home />
      <Trends />
    </div>
  );
}

export default App;
