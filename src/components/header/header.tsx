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
          <Form
            modal={true}
            action="https://liveformhq.com/form/1a021738-357c-47eb-adf0-f446e8b80919"
          >
            <div className="form__title">Свяжитесь с нами</div>
            <div className="form__content">
              <div className="form__group">
                <label className="form__label">Как вас зовут ?</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form__group">
                <label className="form__label">Телефон или email для связи</label>
                <input type="text" name="contact" id="contact" />
              </div>
              <div className="form__group">
                <label className="form__label">Чем мы можем вам помочь ?</label>
                <textarea name="message" cols={30} rows={3} id="message" />
              </div>
            </div>
          </Form>
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
