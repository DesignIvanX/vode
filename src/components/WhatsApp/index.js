import { Logo } from "./Logo";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsApp = ({ number }) => {
  return (
    <WhatsAppWidget
      CompanyIcon={Logo}
      phoneNumber={number}
      companyName="Vode"
      message="Hola! 👋🏼 Queremos cuidar tu salud!"
      replyTimeText="Empresa de agua embotellada"
      inputPlaceHolder="Escribenos un mensage"
      sendButtonText="Enviar"
    />
  );
};

export default WhatsApp;
