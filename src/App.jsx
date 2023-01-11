import React, { useState } from "react";
import "./App.css";

import Timer from "./components/Timer";
import UseRed from "./components/UseRed";
function App() {
  const [tim, setTim] = useState(0);

  console.log(tim);
  return (
    <div id="App">
      <Timer func={setTim} />
      <UseRed clock={tim} />
    </div>
  );
}

export default App;
