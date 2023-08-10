import React from "react";
import Logo from "../../static/Logo.jpg";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const WhatsApp = ({
  phoneNumber,
  chatMessage,
  placeholder,
  accountName,
  statusMessage,
}) => {
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      chatMessage={chatMessage}
      placeholder={placeholder}
      accountName={accountName}
      avatar={Logo}
      statusMessage={statusMessage}
      // allowEsc={true}
    />
  );
};

export default WhatsApp;
