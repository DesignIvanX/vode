import React from "react";
import Header from "./components/Header";
import Information from "./components/Information/index";
import About from "./components/About/index";
import Canva from "./components/Canva";
import "./globalStyles.css";

function App() {
  return (
    <div className="home">
      <header>
        <Canva>
          <Header />
          <Information />
          <About />
        </Canva>
      </header>
    </div>
  );
}

export default App;
