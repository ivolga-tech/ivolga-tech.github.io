import React from "react";
import Card from "../card/card";
import { VocationsVM } from "../../presenters/vocationsVM";
import { Typography } from "../typography/typography";

type Props = {
  viewModel: VocationsVM;
};

const VacanciesContainer = (props: Props) => {
  const {
    viewModel: { title, description, vacanciesCards },
  } = props;

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.log("click click");
  };

  return (
    <section className="section section--icon-cards">
      {title && (
        <div className="section__title">
          <Typography component="h2">{title}</Typography>
        </div>
      )}
      {description && (
        <div className="section__subtitle">
          <Typography component="span">{description} &mdash;&nbsp;</Typography>

          <a href="" onClick={clickHandler}>
            пишите
          </a>

          <span>.</span>
        </div>
      )}
      <div className="section__content box">
        <div className="row">
          {vacanciesCards.length > 0 &&
            vacanciesCards.map(card => {
              const { logo, link, title, metaTags } = card;

              return (
                <div key={title} className="row__col col-xs-12 col-sm-6 col-md-4">
                  <Card cardType="link" className="" to={`/vocations/${link}`} title="Заголовок">
                    <div className="card--icon">
                      {logo.url && (
                        <div className="card__img">
                          <img src={logo.url} alt={logo.alt} />
                        </div>
                      )}
                      <div className="card__content">
                        {title && (
                          <Typography component="div" className="card__title">
                            {title}
                          </Typography>
                        )}
                        <div className="card__meta">
                          <ul className="list list--meta list--icon">
                            {metaTags.length > 0 &&
                              metaTags.map(metaTag => (
                                <li key={metaTag} className="list__item">
                                  {metaTag}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="card__action">
                          <img
                            src={require("../../assets/img/minified-svg/icon-forward.svg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default VacanciesContainer;
