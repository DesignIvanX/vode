import React from "react";
import Header from "./components/Header";
// import Collection from "./components/Collection/index";
import Information from "./components/Information/index";
import Canva from "./components/Canva";
import "./globalStyles.css";

function App() {
  return (
    <div className="home">
      <header>
        <Canva>
          <Header />
          {/* <Collection /> */}
          <Information />
        </Canva>
      </header>
    </div>
  );
}

export default App;
