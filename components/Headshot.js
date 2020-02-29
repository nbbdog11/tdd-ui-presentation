import React from "react";
import headshot from "../static/headshot.jpg";

const style = {
  borderRadius: "50%",
  width: "350px",
};
const Headshot = () => {
  return <img style={style} src={headshot} alt="" />;
};

export default Headshot;
