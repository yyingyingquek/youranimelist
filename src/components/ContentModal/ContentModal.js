import React from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
// import { MdClose } from "react-icons/md";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  display: "flex",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const ContentModal = (props) => {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {props.children}
        <div>
          <button onClick={props.onClose}>Close Modal</button>
        </div>
      </div>
    </>,
    document.querySelector("#modal-root")
  );
};

export default ContentModal;
