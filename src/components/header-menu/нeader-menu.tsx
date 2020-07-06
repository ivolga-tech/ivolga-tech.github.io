import React from "react";
import { Link } from "gatsby";
import "./нeader-menu.css";
import { menu } from "../../configs/menu";
import { joinCssClasses } from "../../utils/utils";
import { Button } from "../button/button";
import { useLocation } from "@reach/router";

type HeaderMenu = {
  url: string;
  name: string;
};

type Props = {
  openModal(): void;
};

const HeaderMenu = (props: Props) => {
  const { openModal } = props;

  const location = useLocation().pathname;

  const modalOn = true;

  return (
    <nav className="menu">
      <ul className="list list--top-menu">
        {menu.map((listItem: HeaderMenu) => (
          <li
            className={joinCssClasses("list__item", location === listItem.url ? "is-active" : "")}
            key={listItem.url}
          >
            <Link className="list__link" to={listItem.url}>
              {listItem.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button type="button" className="btn btn--yellow" onClick={() => openModal()}>
        <a className="list__link" id="modal-open">
          Связаться
        </a>
      </Button>

      {modalOn ? (
        <a className="menu-btn menu-btn--open" id="header-menu-page-open">
          <div className="menu-btn__img">
            <img
              className="icon icon--menu"
              width="18px"
              height="14px"
              src="../../assets/img/minified-svg/icon-menu.svg"
              alt="menu"
            />
          </div>
        </a>
      ) : (
        <a className="menu-btn menu-btn--close" id="header-menu-page-close">
          <div className="menu-btn__img">
            <img
              className="icon icon--close"
              width="14px"
              height="14px"
              src="../../assets/img/minified-svg/icon-close.svg"
              alt="close"
            />
          </div>
        </a>
      )}
    </nav>
  );
};

export default HeaderMenu;
