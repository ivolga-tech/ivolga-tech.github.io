import React from "react";
import "./form.css";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  modal?: boolean;
};

const Form = (props: Props) => {
  const { modal = false } = props;

  return (
    <form
      className={joinCssClasses("form form--contact-us", modal ? "modal__form" : "")}
      action="/"
      method="POST"
    >
      <div className="form__title">Свяжитесь с нами</div>
      <div className="form__content">
        <div className="form__group">
          <label className="form__label">Как вас зовут ?</label>
          <input id="modal-name" type="text" name="name" required />
        </div>
        <div className="form__group">
          <label className="form__label">Телефон или email для связи</label>
          <input id="modal-contact" type="text" name="contact" />
        </div>
        <div className="form__group">
          <label className="form__label">Чем мы можем вам помочь ?</label>
          <textarea id="modal-message" name="message" cols={30} rows={3} />
        </div>
      </div>
      <div className="form__footer">
        <button className="btn btn--lg btn--yellow" id="modal-send-message" type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
