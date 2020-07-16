import { Image } from "../entity/image";

type VacanciesCard = {
  card_logo: Image;
  vacancies_page_link: { text: string };
  card_title: { text: string };
  card_meta_tags: {
    raw: { text: string }[];
  };
};

export type VocationsData = {
  vacancies_page_title: { text: string };
  vacancies_page_description: { text: string };
  vacancies_card_field: VacanciesCard[];
};

type Card = {
  logo: Image;
  link: string;
  title: string;
  metaTags: string[];
};

export type VocationsVM = {
  title?: string;
  description?: string;
  vacanciesCards: Card[];
};

export const toVocationsVM = (vocations: VocationsData): VocationsVM => {
  const { vacancies_page_title, vacancies_page_description, vacancies_card_field } = vocations;

  return {
    title: vacancies_page_title.text,
    description: vacancies_page_description.text,
    vacanciesCards: vacancies_card_field[0].card_title
      ? vacancies_card_field.map(card => {
          return {
            logo: card.card_logo,
            link: card.vacancies_page_link.text,
            title: card.card_title.text,
            metaTags: card.card_meta_tags.raw.map(tag => tag.text),
          };
        })
      : [],
  };
};
