import React from "react";
import { Image } from "mdx-deck";

const RedGreenRefactor = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image
        src="https://marcabraham.files.wordpress.com/2012/04/06_red_green_refactor.jpg"
        size="auto"
      />
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
        }}
      >
        <a href="https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html">
          Robert Martin: The Cycles of TDD
        </a>
      </div>
    </div>
  );
};

export default RedGreenRefactor;
