import React from "react";

const ConfirmationModal = ({
  message,
  onConfirm,
  onCancel,
}) => (
  <div>
    <div>{message}</div>
    <button data-testid="confirmButton" onClick={onConfirm}>
      Confirm
    </button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);

export default ConfirmationModal;
