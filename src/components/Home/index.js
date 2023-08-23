import React from "react";

import Header from "../Header";
import Information from "../Information/index";
import About from "../About/index";
import Featured from "../Featured/index";
import Contact from "../Contact";

function App() {
  return (
    <div className="home">
      <header>
        <Header />
        <Information />
        <Featured />
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
