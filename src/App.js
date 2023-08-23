import React from "react";
import Canva from "./components/Canva";
import Routers from "./router/Routers";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Canva>
          <Routers />
        </Canva>
      </BrowserRouter>
    </div>
  );
}

export default App;
