import React from "react";
import Navegation from "../Navegation/index";
import Loading from "../Loading/index";
import Footer from "../Footer/index";
const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
      <Footer />
    </>
  );
};

export default Canva;
