import React, { useState } from "react";
import "./header.css";
import HeaderMenu from "../header-menu/нeader-menu";
import { Link } from "gatsby";
import Modal from "../modal/modal";
import Form from "../form/form";
import Card from "../card/card";

type Props = {
  headerLogo?: string;
  menuState: boolean;
  openMenu(): void;
  closeMenu(): void;
};

const Header = (props: Props) => {
  const { headerLogo, menuState, openMenu, closeMenu } = props;

  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <header className="page__header">
      <Link className="logo" to="/">
        {headerLogo && <img className="icon icon--ivolga" src={headerLogo} alt="logo-ivolga" />}
      </Link>
      <Modal modalState={modalState} closeModal={closeModal} formModal={true}>
        <Card cardType="form-modal">
          <Form modal={true} />
        </Card>
      </Modal>
      <HeaderMenu
        menuState={menuState}
        openModal={openModal}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
    </header>
  );
};

export default Header;
