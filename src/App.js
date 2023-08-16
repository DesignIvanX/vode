import React from "react";
import Header from "./components/Header";
import Information from "./components/Information/index";
import About from "./components/About/index";
import Featured from "./components/Featured/index";
import Canva from "./components/Canva";
import Contact from "./components/Contact";
import "./globalStyles.css";

function App() {
  return (
    <div className="home">
      <header>
        <Canva>
          <Header />
          <Information />
          <Featured />
          <About />
          <Contact />
        </Canva>
      </header>
    </div>
  );
}

export default App;
