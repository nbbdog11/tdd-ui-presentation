import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ConfirmationModal from "../ConfirmationModalTestId";

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

    const { getByTestId } = render(
      <ConfirmationModal {...testProps} />
    );
    const confirmButton = getByTestId("confirmButton");
    fireEvent.click(confirmButton);

    expect(testProps.onConfirm).toHaveBeenCalled();
  });
});
