import React from "react";
import qrCode from "../static/qr-code.png";

const style = {
  padding: '2rem'
};

const QrCode = () => {
  return <img style={style} src={qrCode} alt="" />;
};

export default QrCode;
