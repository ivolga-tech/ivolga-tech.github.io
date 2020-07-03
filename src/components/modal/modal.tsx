import React, { useEffect, useState } from "react";
import "./modal.css";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  children: React.ReactNode;
  modalState: boolean;
  formModal?: boolean;
  closeModal(): void;
};

const Modal = ({ children, modalState, formModal, closeModal }: Props) => {
  const [modalWindow, setModalWindow] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    closeModal();
  };

  useEffect(() => {
    setModalWindow(modalState);
  }, [modalState]);

  return (
    <div className={joinCssClasses("modal", modalWindow ? "is-show" : "")}>
      <div className="modal__background" onClick={handleClick} />
      {formModal ? <div className="modal__form">{children}</div> : { children }}
    </div>
  );
};

export default Modal;
