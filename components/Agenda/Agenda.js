import React from "react";
import steps from "./steps";

const Agenda = ({ currentStep }) => {
  return (
    <ul>
      {steps.map((step, index) => (
        <li key="step">{`${step} ${
          index < currentStep ? "✅" : ""
        }`}</li>
      ))}
    </ul>
  );
};

export default Agenda;
