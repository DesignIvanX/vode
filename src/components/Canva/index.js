import React from "react";
import Navegation from "../Navegation/index";
import Loading from "../Loading/index";
const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
    </>
  );
};

export default Canva;
