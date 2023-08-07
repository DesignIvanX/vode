import React from "react";
import Navegation from "../Navegation/index";
import Loading from "../Loading/index";
import Footer from "../Footer/index";
import WhatsApp from "../WhatsApp/index";

const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
      <Footer />
      <WhatsApp number="0961154054" />
    </>
  );
};

export default Canva;
