import React from "react";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import Card from "../card/card";
import { PortfolioVM } from "../../presenters/portfolioVM.ts";

type Props = {
  viewModel: PortfolioVM;
};

const PortfolioContainer = (props: Props) => {
  const { viewModel } = props;
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
          {viewModel.map(card => {
            const { title, description, logo, link, meta, backgroundColor } = card;

            return (
              <div key={title} className="row__col col-xs-12 col-sm-6 col-md-4">
                <Card
                  cardType={"link"}
                  className="card--hover"
                  to={`/portfolio/${link}`}
                  title={title}
                >
                  <div className="card__img" style={{ background: `${backgroundColor}` }}>
                    <img src={logo.url} alt={logo.alt} title={title} />
                  </div>
                  <div className="card__content">
                    <div className="card__title">{title}</div>
                    <div className="card__meta">
                      <ul className="list list--meta">
                        <li className="list__item">{meta}</li>
                      </ul>
                    </div>
                    <Typography className="card__text">{description}</Typography>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <Link className="btn btn--mobile btn--stroke btn--stroke-yellow" to="/portfolio/">
          <span>Смотреть все проекты</span>
          <img src={require("../../assets/img/minified-svg/icon-forward.svg")} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioContainer;
