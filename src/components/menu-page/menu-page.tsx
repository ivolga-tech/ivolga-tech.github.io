import React from "react";
import { menu } from "../../configs/menu";
import { Link } from "gatsby";
import { Typography } from "../typography/typography";
import { joinCssClasses } from "../../utils/utils";
import { useLocation } from "@reach/router";
import { ContactsPageVM } from "../../presenters/contactsVM";

type Props = {
  contactsViewModel?: ContactsPageVM;
};

const MenuPage = (props: Props) => {
  const { contactsViewModel } = props;
  const location = useLocation().pathname;
  return (
    <div className="menu-page" id="menu-page">
      <ul className="list list--menu-page">
        {menu.map(listItem => (
          <li
            className={joinCssClasses("list__item", location === listItem.url ? "is-active" : "")}
          >
            <Link className="list__link" to={listItem.url}>
              <Typography>{listItem.name}</Typography>
            </Link>
          </li>
        ))}
      </ul>
      {contactsViewModel?.contacts && (
        <section className="section section--info section--menu-page">
          <div className="section__content">
            <ul className="list list--contacts list--menu-page-contacts">
              {contactsViewModel.contacts.map(contact => {
                const { name, content } = contact;
                return (
                  <li key={name} className="list__item">
                    <Typography component="span">{name}: </Typography> {content}
                  </li>
                );
              })}
            </ul>
            <ul className="list list--social-links">
              {contactsViewModel.socialLinks.map(socialLink => {
                const { logo, link } = socialLink;
                return (
                  <li key={link} className="list__item">
                    <a href={link}>
                      <img className="social-logo" src={logo} alt="social link logo" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default MenuPage;
