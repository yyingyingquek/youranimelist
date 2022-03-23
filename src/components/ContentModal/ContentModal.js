import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import ThemeContext from "../../context/context-theme";


const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  z-index: 1000;
  display: flex;
  border-radius: 40px;
`;

const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 1000;
`;

const ContentModal = (props) => {
  const { activeTheme } = useContext(ThemeContext);
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <>
      <OverlayStyle />
      <ModalStyle style={activeTheme}>
        {props.children}
        <div>
          <CloseModalButton aria-label="Close modal" onClick={props.onClose} />
        </div>
      </ModalStyle>
    </>,
    document.querySelector("#modal-root")
  );
};

export default ContentModal;
