import React from "react";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const PortfolioContainer = () => {
  const location = useLocation().pathname;

  return (
    <section className="section section--cards">

      <div className="section__title">
        <Typography component="h2" resetMargin={true}>
          Проекты
        </Typography>
        {location !== "/portfolio/" && (
          <Button component="div" className="btn btn--sm btn--yellow">
            <Link to="/portfolio/">Портфолио</Link>
          </Button>
        )}
      </div>

      <div className="section__content box">
        <div className="row">

          <div className="row__col col-xs-12 col-sm-6 col-md-4">
            <Link
              className="card card--lightgrey card--hover"
              to="/portfolio/waitre/"
              data-toggle="link"
              title="Заголовок"
            >
              <div className="card__img">
                <img src="static/img/content/waitre-logo.png" alt="Waitre" title="Waitre" />
              </div>
              <div className="card__content">
                <div className="card__title">Waitre</div>
                <div className="card__meta">
                  <ul className="list list--meta">
                    <li className="list__item">Облачная система управления ресторанами</li>
                  </ul>
                </div>
                <div className="card__text">
                  Облачная система автоматизации кафе, баров и ресторанов полного цикла. Создается
                  при активном участии профессионалов ресторанного бизнеса.
                </div>
              </div>
            </Link>
          </div>

        </div>

        <a
          className="btn btn--mobile btn--stroke btn--stroke-yellow"
          href="/source-files/portfolio.html"
        >
          <span>Смотреть все проекты</span>
          {/*<svg className="icon icon--forward" width="19px" height="16px">*/}
          {/*  <use xlink:href="#icon-forward"></use>*/}
          {/*</svg>*/}
        </a>
      </div>
    </section>
  );
};

export default PortfolioContainer;
