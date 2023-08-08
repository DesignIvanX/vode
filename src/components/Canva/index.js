import React from "react";
import Navegation from "../Navegation/index";
import Loading from "../Loading/index";
import Footer from "../Footer/index";
import Logo from "../../static/Logo.jpg";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="0961154054"
        chatMessage="Hola 🤝! Queremos cuidar tu salud"
        placeholder="Escribir un mensaje"
        accountName="VODE"
        avatar={Logo}
        statusMessage="Empresa de agua embotellada"
      />
    </>
  );
};

export default Canva;
