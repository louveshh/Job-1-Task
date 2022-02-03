import SideBar from "./components/SideBar";
import { useState } from "react";

import "./App.css";
function App() {
  const [slider, setSlider] = useState(true);
  const handleSlider = (event) => {
    setSlider(!slider);
  };
  const hideSlider = (event) => {
    setSlider(false);
  };

  return (
    <div className="App">
      <button className="slider-button" onClick={handleSlider}>
        KOSZYK
      </button>
      <div className="filler" onClick={hideSlider}></div>
      {slider ? <SideBar handleSlider={handleSlider} /> : null}
    </div>
  );
}

export default App;
