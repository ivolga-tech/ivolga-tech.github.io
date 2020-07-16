import { Image } from "../entity/image";

export type PortfolioData = {
  card_background_color: string;
  page_link: { text: string };
  portfolio_card_image: Image;
  portfolio_card_title: { text: string };
  portfolio_card_description: { text: string };
  portfolio_card_meta_tegs: { text: string };
}[];

export type PortfolioVM = {
  backgroundColor: string;
  link: string;
  logo: Image;
  title: string;
  description: string;
  meta: string;
}[];

export const toPortfolioVM = (portfolio: PortfolioData): PortfolioVM => {
  return portfolio.map(card => {
    const {
      card_background_color,
      page_link,
      portfolio_card_image,
      portfolio_card_title,
      portfolio_card_description,
      portfolio_card_meta_tegs,
    } = card;

    return {
      backgroundColor: card_background_color ? card_background_color : "",
      link: page_link.text ? page_link.text : "",
      logo: portfolio_card_image,
      title: portfolio_card_title.text ? portfolio_card_title.text : "",
      description: portfolio_card_description.text ? portfolio_card_description.text : "",
      meta: portfolio_card_meta_tegs.text ? portfolio_card_meta_tegs.text : "",
    };
  });
};
