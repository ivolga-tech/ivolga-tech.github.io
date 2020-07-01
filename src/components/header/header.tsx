import React from "react";
import "./header.css";
import HeaderMenu from "../header-menu/нeader-menu";
import { Link } from "gatsby";

type Props = {
  headerLogo?: string;
};

const Header = (props: Props) => {
  const { headerLogo } = props;

  return (
    <header className="page__header">
      <Link className="logo" to="/">
        {headerLogo && (
          <img
            className="icon icon--ivolga"
            src={headerLogo}
            alt="logo-ivolga"
          />
        )}
      </Link>

      {/*<div className="modal">*/}
      {/*    <div className="modal__background"/>*/}
      {/*    <div className="modal__form">*/}
      {/*        <div className="card card--form card--modal">*/}
      {/*            <form className="form form--contact-us" action="/" method="POST">*/}
      {/*                <div className="form__title">Свяжитесь с нами</div>*/}
      {/*                <div className="form__content">*/}
      {/*                    <div className="form__group">*/}
      {/*                        <label className="form__label">Как вас зовут ?</label>*/}
      {/*                        <input id="modal-name" type="text" name="name" required />*/}
      {/*                    </div>*/}
      {/*                    <div className="form__group">*/}
      {/*                        <label className="form__label">Телефон или email для связи</label>*/}
      {/*                        <input id="modal-contact" type="text" name="contact" />*/}
      {/*                    </div>*/}
      {/*                    <div className="form__group">*/}
      {/*                        <label className="form__label">Чем мы можем вам помочь ?</label>*/}
      {/*                        <textarea id="modal-message" name="message" cols={30} rows={3} />*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*                <div className="form__footer">*/}
      {/*                    <button className="btn btn--lg btn--yellow" id="modal-send-message"*/}
      {/*                            type="submit">Отправить*/}
      {/*                    </button>*/}
      {/*                </div>*/}
      {/*            </form>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <HeaderMenu />
    </header>
  );
};

export default Header;
