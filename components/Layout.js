import React from "react";
import bitmoji from "../static/bitmoji.png";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <img
          src={bitmoji}
          alt="Scott Bitmoji"
          style={{ width: "100px" }}
        />
        <span style={{ fontSize: "28px" }}>@nbbdog11</span>
      </div>
    </div>
  );
};

export default Layout;
