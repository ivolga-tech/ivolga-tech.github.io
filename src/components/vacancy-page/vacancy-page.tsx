import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import SEO from "../seo";
import { toVacancyPageVM, VacancyPageQuery } from "../../presenters/vacancy-pageVM";
import { Typography } from "../typography/typography";
import Form from "../form/form";
import Card from "../card/card";
import { joinCssClasses } from "../../utils/utils";
import { ContactsData, toContactsPageVM } from "../../presenters/contactsVM";

type Props = {
  data: {
    prismicVacancyPage: {
      uid: string;
      data: VacancyPageQuery;
    };
    prismicHomepage: {
      data: ContactsData;
    };
  };
};

const VacancyPage = ({ data: { prismicVacancyPage, prismicHomepage } }: Props) => {
  const { data } = prismicVacancyPage;

  const viewModel = toVacancyPageVM(data);

  const contactsViewModel = toContactsPageVM(prismicHomepage.data);

  const { logo, title, metaTags, description, vocationsList } = viewModel;

  const { contacts, socialLinks } = contactsViewModel;

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
                  {contacts.length > 0 &&
                    contacts.map(contact => {
                      const { name, content } = contact;
                      return (
                        <li key={name} className="list__item">
                          <Typography component="span">{name}: </Typography> {content}
                        </li>
                      );
                    })}
                </ul>
                <ul className="list list--social-links">
                  {socialLinks.length > 0 &&
                    socialLinks.map(socialLink => {
                      const { logo, link } = socialLink;
                      return (
                        <li key={link} className="list__item">
                          <a href={link}>
                            <img className="social-logo" src={logo.url} alt={logo.alt} />
                          </a>
                        </li>
                      );
                    })}
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
