import React from "react";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import Card from "../card/card";

type Props = {
  viewModel: any;
};

const PortfolioContainer = (props: Props) => {
  const { viewModel } = props;
  console.log(viewModel);
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
          {viewModel.map((card: any) => {
            return (
              <div
                key={card.portfolio_card_title.text}
                className="row__col col-xs-12 col-sm-6 col-md-4"
              >
                <Card
                  cardType={"link"}
                  className="card--hover"
                  to={`/portfolio/${card.portfolio_card_title.text.toLowerCase()}/`}
                  title={card.portfolio_card_title.text}
                >
                  <div
                    className="card__img"
                    style={{ background: `${card.card_background_color}` }}
                  >
                    <img src={card.portfolio_card_image.url} alt="Waitre" title="Waitre" />
                  </div>
                  <div className="card__content">
                    <div className="card__title">{card.portfolio_card_title.text}</div>
                    <div className="card__meta">
                      <ul className="list list--meta">
                        <li className="list__item">{card.portfolio_card_meta_tegs.text}</li>
                      </ul>
                    </div>
                    <Typography className="card__text">
                      {card.portfolio_card_description.text}
                    </Typography>
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
