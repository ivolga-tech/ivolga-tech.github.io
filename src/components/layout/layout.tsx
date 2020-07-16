/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PageWrapper from "../wrapper/wrapper";
import Header from "../header/header";
import MenuPage from "../menu-page/menu-page";
import { ContactsPageVM } from "../../presenters/contactsVM";

type Props = {
  children: React.ReactNode;
  contactsViewModel?: ContactsPageVM;
};

const Layout = (props: Props) => {
  const { children, contactsViewModel } = props;

  const [menuState, setMenuState] = useState(false);

  const openMenu = () => {
    setMenuState(true);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  return (
    <PageWrapper menuState={menuState}>
      <Header
        menuState={menuState}
        openMenu={openMenu}
        closeMenu={closeMenu}
        headerLogo={require("../../assets/img/minified-svg/logo-ivolga.svg")}
      />
      <main>
        <div className="page__content" id="content">
          {children}
        </div>
      </main>
      <MenuPage contactsViewModel={contactsViewModel} />
    </PageWrapper>
  );
};

export default Layout;
