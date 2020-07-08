import React from "react";
import Form from "../form/form";
import Card from "../card/card";
import { ContactsPageVM } from "../../presenters/contacts";
import { Typography } from "../typography/typography";

type Props = {
  viewModel: ContactsPageVM;
};

const ContactsContainer = (props: Props) => {
  const {
    viewModel: { title, subtitle, contacts, socialLinks },
  } = props;

  return (
    <div className="row mt-40">
      <div className="col-md-6">
        <section className="section section--info">
          <div className="section__title">
            <Typography component="h2">{title}</Typography>
          </div>
          <div className="section__subtitle">
            <Typography>{subtitle}</Typography>
          </div>

          <div className="section__content">
            <ul className="list list--contacts">
              {contacts.map(contact => {
                const { name, content } = contact;
                return (
                  <li key={name} className="list__item">
                    <Typography component="span">{name}: </Typography> {content}
                  </li>
                );
              })}
            </ul>

            <ul className="list list--social-links">
              {socialLinks.map(socialLink => {
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
      </div>

      <div className="col-xs-12 col-md-6">
        <Card cardType="form">
          <Form />
        </Card>
      </div>
    </div>
  );
};

export default ContactsContainer;
