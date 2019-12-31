import React from "react";

const ConfirmationModal = ({
  message,
  onConfirm,
  onCancel,
}) => (
  <div>
    <div>{message}</div>
    <div style={{ display: "flex" }}>
      <button
        data-testid="confirmButton"
        onClick={onConfirm}
      >
        Confirm
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default ConfirmationModal;
