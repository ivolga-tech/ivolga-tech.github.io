import { Image } from "../entity/image";

type MetaTagData = {
  vacancy_page_meta_tag: {
    text: string;
  }[];
};

type ListItem = {
  list_title: { text: string }[];
  list_content: { text: string }[];
};

export type VacancyPageQuery = {
  vacancy_page_logo: Image;
  vacancy_page_title: { text: string }[];
  meta_field: MetaTagData[];
  vacancy_page_description: { text: string }[];
  vocation_list_field: ListItem[];
};

type MetaTag = {
  metaTag: string;
};

type VocationsList = {
  title: string;
  content: string[];
};

export type VacancyPageVM = {
  logo?: Image;
  title: string;
  metaTags: MetaTag[];
  description: string;
  vocationsList: VocationsList[];
};

export const toVacancyPageVM = (vacancyPage: VacancyPageQuery): VacancyPageVM => {
  const {
    vacancy_page_logo,
    vacancy_page_title,
    meta_field,
    vacancy_page_description,
    vocation_list_field,
  } = vacancyPage;

  return {
    logo: vacancy_page_logo,
    title: vacancy_page_title.length > 0 ? vacancy_page_title[0].text : "",
    metaTags: meta_field[0].vacancy_page_meta_tag[0].text
      ? meta_field.map(mataTag => {
          return {
            metaTag: mataTag.vacancy_page_meta_tag[0].text,
          };
        })
      : [],
    description: vacancy_page_description.length > 0 ? vacancy_page_description[0].text : "",
    vocationsList: vocation_list_field[0].list_title[0].text
      ? vocation_list_field.map(list => {
          return {
            title: list.list_title[0].text,
            content: list.list_content.map(listItem => {
              return listItem.text;
            }),
          };
        })
      : [],
  };
};
