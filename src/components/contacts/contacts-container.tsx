import React from "react";
import Form from "../form/form";
import Card from "../card/card";
import { ContactsPageVM } from "../../presenters/contactsVM";
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
                      <img className="social-logo" src={logo.url} alt={logo.alt} />
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
          <Form action="https://liveformhq.com/form/1a021738-357c-47eb-adf0-f446e8b80919?g-recaptcha-response">
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
      </div>
    </div>
  );
};

export default ContactsContainer;
