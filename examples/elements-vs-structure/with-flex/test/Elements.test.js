import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ConfirmationModal from "../ConfirmationModal";

describe("<ConfirmationModal />", () => {
  const props = {
    message: "Are you sure?",
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  it("calls onConfirm on confirm button click", () => {
    const testProps = {
      ...props,
      onConfirm: jest.fn(),
    };

    const { getByText } = render(
      <ConfirmationModal {...testProps} />
    );
    const confirmButton = getByText("Confirm");
    fireEvent.click(confirmButton);

    expect(testProps.onConfirm).toHaveBeenCalled();
  });
});
