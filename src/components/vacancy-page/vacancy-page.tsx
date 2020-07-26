import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import SEO from "../seo";
import { toVacancyPageVM, VacancyPageQuery } from "../../presenters/vacancy-pageVM";
import { Typography } from "../typography/typography";
import Form from "../form/form";
import Card from "../card/card";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  data: {
    prismicVacancyPage: {
      uid: string;
      data: VacancyPageQuery;
    };
    prismicHomepage: any;
  };
};

const VacancyPage = ({ data: { prismicVacancyPage, prismicHomepage } }: Props) => {
  const { data } = prismicVacancyPage;

  const { contacts_content, list_social_links } = prismicHomepage.data;

  console.log(list_social_links);

  const viewModel = toVacancyPageVM(data);

  const { logo, title, metaTags, description, vocationsList } = viewModel;

  const [file, setFile] = useState(false);

  const [fileName, setFileName] = useState("Добавить файл");

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileName(event.target.files[0].name);
    }
    setFile(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setFileName("Добавить файл");
    setFile(false);
  };

  return (
    <Layout>
      <SEO title={title} />

      <div className="vocation">
        <div className="vocation__card">
          <div className="card card--header mt-40">
            {logo?.url && (
              <div className="card__img">
                <img src={logo.url} alt={logo.alt} />
              </div>
            )}

            <div className="card__content">
              <Typography resetMargin={true} component="div" className="card__title">
                {title}
              </Typography>
              <div className="card__meta">
                <div className="card__meta-title">Вакансия</div>
                {metaTags.length > 0 && (
                  <ul className="list list--meta list--icon">
                    {metaTags.map(tag => {
                      return (
                        <li key={tag.metaTag} className="list__item">
                          {tag.metaTag}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="card__desc">{description}</div>
            </div>
          </div>
        </div>

        {vocationsList.length > 0 && (
          <div className="vocation__list">
            {vocationsList.map((vocation, index) => {
              const { title, content } = vocation;

              return (
                <div key={index} className="list list--styled">
                  <div className="list__title">{title}</div>
                  <ul className="list__content">
                    {content.map(listItem => {
                      return (
                        <li key={listItem} className="list__item">
                          {listItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <div className="row mt-100">
          <div className="col-xs-12 col-md-6">
            <section className="section section--info">
              <div className="section__title">
                <h2>Хотите попасть в команду?</h2>
              </div>
              <div className="section__subtitle">
                Оставьте свои контактные данные и мы свяжемся с вами.
              </div>
              <div className="section__content">
                <ul className="list list--contacts">
                  {contacts_content.map(
                    (contact: {
                      list_item_name: { text: string };
                      list_item_content: { text: string };
                    }) => {
                      const { list_item_name, list_item_content } = contact;
                      return (
                        <li key={list_item_name.text} className="list__item">
                          <Typography component="span">{list_item_name.text}: </Typography>{" "}
                          {list_item_content.text}
                        </li>
                      );
                    }
                  )}
                </ul>
                <ul className="list list--social-links">
                  {list_social_links.map(
                    (socialLink: {
                      social_logo: { url: string; alt: string };
                      social_links: { url: string };
                    }) => {
                      const { social_logo, social_links } = socialLink;
                      return (
                        <li key={social_links.url} className="list__item">
                          <a href={social_links.url}>
                            <img
                              className="social-logo"
                              src={social_logo.url}
                              alt={social_logo.alt}
                            />
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </section>
          </div>

          <div className="col-xs-12 col-md-6">
            <Card cardType="form">
              <Form action="https://liveformhq.com/form/da53058e-d687-40e4-864d-3a4423e96f2a">
                <div className="form__title">Свяжитесь с нами</div>
                <div className="form__content">
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      Имя
                    </label>
                    <input id="name" type="text" name="name" required />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="city">
                      Город
                    </label>
                    <input id="city" type="text" name="city" />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="email">
                      Email
                    </label>
                    <input id="email" type="email" name="email" />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="phone">
                      Телефон
                    </label>
                    <input id="phone" type="tel" name="phone" />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="info">
                      О себе
                    </label>
                    <textarea id="info" name="info" cols={30} rows={3} />
                  </div>

                  <div className="form__file">
                    <input
                      className={joinCssClasses("inputfile", !file ? "no-file" : "")}
                      id="file-2"
                      type="file"
                      name="resume"
                      onChange={handleFiles}
                    />
                    <div className="label">
                      <div className="label-icon">
                        <img
                          className="icon icon--file"
                          src={require("../../assets/img/minified-svg/file.svg")}
                          width="24px"
                          height="24px"
                          alt="file"
                        />
                      </div>
                      <label htmlFor="file-2">
                        <span>{fileName}</span>
                      </label>
                      <div className="label-remove" onClick={handleClick}>
                        <img
                          className="icon icon--remove"
                          src={require("../../assets/img/minified-svg/icon-remove.svg")}
                          width="10px"
                          height="10px"
                          alt="remove"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VacancyPage;

export const pageQuery = graphql`
  query VacancyPageSlug($uid: String) {
    prismicVacancyPage(uid: { eq: $uid }) {
      uid
      data {
        vacancy_page_logo {
          alt
          url
        }
        vacancy_page_title {
          text
        }
        meta_field {
          vacancy_page_meta_tag {
            text
          }
        }
        vacancy_page_description {
          text
        }
        vocation_list_field {
          list_title {
            text
          }
          list_content {
            text
          }
        }
      }
    }

    prismicHomepage {
      data {
        contacts_content {
          list_item_content {
            text
          }
          list_item_name {
            text
          }
        }
        list_social_links {
          social_logo {
            alt
            url
          }
          social_links {
            url
          }
        }
      }
    }
  }
`;
