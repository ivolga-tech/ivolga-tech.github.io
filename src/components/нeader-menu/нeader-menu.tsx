import React from "react"
import { Link } from "gatsby"
import "./нeader-menu.css"
import { menu } from "../../configs/menu"

type EaderMenu = {
  url: string
  name: string
}

const HeaderMenu = () => {
  const pathname: string =
    typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <nav className="menu">
      <ul className="list list--top-menu">
        {menu.map((listItem: EaderMenu) => (
          <li
            className={
              "list__item " + `${pathname === listItem.url ? "is-active" : ""}`
            }
            key={listItem.url}
          >
            <Link className="list__link" to={listItem.url}>
              {listItem.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="btn btn--yellow">
        <a className="list__link" id="modal-open" href="#">
          Связаться
        </a>
      </div>

      {/*<a className="нeader-menu-btn нeader-menu-btn--open" href="#" id="нeader-menu-page-open">*/}
      {/*    <div className="нeader-menu-btn__img">*/}
      {/*        <svg className="icon icon--нeader-menu" width="18px" height="14px">*/}
      {/*            <use xlink:href="#icon-нeader-menu"></use>*/}
      {/*        </svg>*/}

      {/*    </div>*/}
      {/*</a>*/}
      {/*<a className="нeader-menu-btn нeader-menu-btn--close" href="#" id="нeader-menu-page-close">*/}
      {/*    <div className="нeader-menu-btn__img">*/}
      {/*        <svg className="icon icon--close" width="14px" height="14px">*/}
      {/*            <use xlink:href="#icon-close"></use>*/}
      {/*        </svg>*/}

      {/*    </div>*/}
      {/*</a>*/}
    </nav>
  )
}

export default HeaderMenu
