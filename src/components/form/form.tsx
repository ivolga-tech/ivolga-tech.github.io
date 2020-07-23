import React, { useState } from "react";
import "./form.css";
import { joinCssClasses } from "../../utils/utils";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  children: React.ReactNode;
  modal?: boolean;
  action?: string;
};

const Form = (props: Props) => {
  const { children, modal = false, action } = props;
  const [, setRecaptchaValue] = useState("");
  const [submit, setSubmit] = useState(true);

  function onChange(value: any) {
    setRecaptchaValue(value);
    if (value !== null) {
      setSubmit(false);
    }
  }

  return (
    <form
      className={joinCssClasses("form form--contact-us", modal ? "modal__form" : "")}
      action={action}
      method="POST"
      acceptCharset="utf-8"
      encType="multipart/form-data"
    >
      {children}
      <br />

      <span className="g-recaptcha">
        <ReCAPTCHA
          sitekey="6LcjFLUZAAAAAG9eSs-0eGB6LhDa3d-EYkcqPnMV"
          size="compact"
          onChange={onChange}
        />
      </span>

      <div className="form__footer">
        <button className="btn btn--lg btn--yellow" type="submit" disabled={submit}>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
