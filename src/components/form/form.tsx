import React, { useState } from "react";
import "./form.css";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  modal?: boolean;
};

const Form = (props: Props) => {
  const { modal = false } = props;
  const [loading, setLoading] = useState(false);
  const [formBtn, setFormBtn] = useState("Отправить");

  async function loginHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const req = new XMLHttpRequest();
    setLoading(true);
    if (form) {
      req.open(form.method, form.action);
      req.setRequestHeader("Accept", "application/json");
      req.onreadystatechange = () => {
        if (req.readyState !== XMLHttpRequest.DONE) return;
        if (req.status === 200) {
          form.reset();
          setLoading(false);
          setFormBtn("Отправленно");
        } else {
          setFormBtn("Ошибка отправки");
          setLoading(false);
          console.log(req.status);
        }
      };
      req.send(data);
    }
  }

  return (
    <form
      className={joinCssClasses("form form--contact-us", modal ? "modal__form" : "")}
      onSubmit={loginHandler}
      action="https://formspree.io/xqkywzrv"
      method="POST"
    >
      <div className="form__title">Свяжитесь с нами</div>
      <div className="form__content">
        <div className="form__group">
          <label className="form__label">Как вас зовут ?</label>
          <input type="text" name="name" required />
        </div>
        <div className="form__group">
          <label className="form__label">Телефон или email для связи</label>
          <input type="text" name="contact" />
        </div>
        <div className="form__group">
          <label className="form__label">Чем мы можем вам помочь ?</label>
          <textarea name="message" cols={30} rows={3} />
        </div>
      </div>
      <div className="form__footer">
        <button className="btn btn--lg btn--yellow" type="submit" disabled={loading}>
          {formBtn}
        </button>
      </div>
    </form>
  );
};

export default Form;
