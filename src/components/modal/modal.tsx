import React, { useEffect, useState } from "react";
import "./modal.css";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  children: React.ReactNode;
  openModal: boolean;
};

const Modal = ({ children, openModal }: Props) => {
  const [modalWindow, setModalWindow] = useState(false);

  const closeModal = () => {
    setModalWindow(false);
  };

  useEffect(() => {
    setModalWindow(openModal);
  }, [openModal]);

  return (
    <div className={joinCssClasses("modal", modalWindow ? "is-show" : "")}>
      <div className="modal__background" onClick={closeModal} />
      {children}
    </div>
  );
};

export default Modal;
