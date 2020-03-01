import React from "react";
import { Appear } from "mdx-deck";
import steps from "./steps";

const SteppedAgenda = ({ doneSteps }) => {
  return (
    <ul>
      <Appear>
        {steps.map((step, index) => (
          <li key="step">{`${step} ${
            doneSteps.includes(index) ? "✅" : ""
          }`}</li>
        ))}
      </Appear>
    </ul>
  );
};

export default SteppedAgenda;
