import React from "react";
import Navegation from "../Navegation/index";
import Loading from "../Loading/index";
import Footer from "../Footer/index";
import WhatsApp from "../WhatsApp";

const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
      <Footer />
      <WhatsApp
        phoneNumber="+595971929830"
        chatMessage="Hola 🤝! Queremos cuidar tu salud"
        placeholder="Escribir un mensaje"
        accountName="VODE"
        statusMessage="Empresa de agua embotellada"
      />
    </>
  );
};

export default Canva;
