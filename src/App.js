import SideBar from "./components/SideBar";
import { useGlobalContext } from "./components/AppProvider";
import "./App.css";
import Background from "./components/Background";
function App() {
  const { hide } = useGlobalContext();
  return (
    <div className="App">
      <Background />
      {hide ? <SideBar /> : null}
    </div>
  );
}

export default App;
