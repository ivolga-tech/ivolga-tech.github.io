import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import SEO from "../seo";
import { toVacancyPageVM, VacancyPageQuery } from "../../presenters/vacancy-pageVM";
import { Typography } from "../typography/typography";

type Props = {
  data: {
    prismicVacancyPage: {
      uid: string;
      data: VacancyPageQuery;
    };
  };
};

const VacancyPage = ({ data: { prismicVacancyPage } }: Props) => {
  const { data } = prismicVacancyPage;
  console.log(prismicVacancyPage);

  const viewModel = toVacancyPageVM(data);

  const { logo, title, metaTags, description, vocationsList } = viewModel;

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

        {/*<div className="row mt-100">*/}
        {/*  <div className="col-xs-12 col-md-6">*/}
        {/*    <section className="section section--info">*/}
        {/*      <div className="section__title">*/}
        {/*        <h2>Хотите попасть в команду?</h2>*/}
        {/*      </div>*/}
        {/*      <div className="section__subtitle">Оставьте свои контактные данные и мы свяжемся с вами.</div>*/}
        {/*      <div className="section__content">*/}
        {/*        <ul className="list list--contacts">*/}
        {/*          <li className="list__item"><span>Телефон:</span>8 920 6432721</li>*/}
        {/*          <li className="list__item"><span>Email:</span>info@ivolga.tech</li>*/}
        {/*          <li className="list__item"><span>Адрес:</span>Кострома, ул. Нижняя Дебря 70</li>*/}
        {/*        </ul>*/}
        {/*        <ul className="list list--social-links">*/}
        {/*          <li className="list__item vk">*/}
        {/*            <a href="/">*/}
        {/*              /!*<svg className="icon icon--vk" width="18px" height="10px">*!/*/}
        {/*              /!*  <use xlink:href="#icon-vk"></use>*!/*/}
        {/*              /!*</svg>*!/*/}
        {/*            </a>*/}
        {/*          </li>*/}
        {/*          <li className="list__item tw">*/}
        {/*            <a href="/">*/}
        {/*              /!*<svg className="icon icon--tw" width="17px" height="14px">*!/*/}
        {/*              /!*  <use xlink:href="#icon-tw"></use>*!/*/}
        {/*              /!*</svg>*!/*/}
        {/*            </a>*/}
        {/*          </li>*/}
        {/*          <li className="list__item fb-sm">*/}
        {/*            <a href="/">*/}
        {/*              /!*<svg className="icon icon--fb-sm" width="9px" height="20px">*!/*/}
        {/*              /!*  <use xlink:href="#icon-fb-sm"></use>*!/*/}
        {/*              /!*</svg>*!/*/}
        {/*            </a>*/}
        {/*          </li>*/}
        {/*        </ul>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*  </div>*/}
        {/*  <div className="col-xs-12 col-md-6">*/}
        {/*    <div className="card card--form">*/}
        {/*      <form className="form form--contact-us" action="/" method="POST" encType="multipart/form-data">*/}
        {/*        <div className="form__title">Свяжитесь с нами</div>*/}
        {/*        <div className="form__content">*/}
        {/*          <div className="form__group">*/}
        {/*            <label className="form__label" htmlFor="name">Имя</label>*/}
        {/*            <input id="name" type="text" name="name" required />*/}
        {/*          </div>*/}
        {/*          <div className="form__group">*/}
        {/*            <label className="form__label" htmlFor="city">Город</label>*/}
        {/*            <input id="city" type="text" name="city" />*/}
        {/*          </div>*/}
        {/*          <div className="form__group">*/}
        {/*            <label className="form__label" htmlFor="email">Email</label>*/}
        {/*            <input id="email" type="email" name="email" />*/}
        {/*          </div>*/}
        {/*          <div className="form__group">*/}
        {/*            <label className="form__label" htmlFor="phone">Телефон</label>*/}
        {/*            <input id="phone" type="text" name="phone" />*/}
        {/*          </div>*/}
        {/*          <div className="form__group">*/}
        {/*            <label className="form__label" htmlFor="info">О себе</label>*/}
        {/*            <textarea id="info" name="info" cols={30} rows={3} />*/}
        {/*          </div>*/}
        {/*          <div className="form__file">*/}
        {/*            <input className="inputfile no-file" id="file-2" type="file" name="file-2">*/}
        {/*              <div className="label">*/}
        {/*                <div className="label-icon">*/}
        {/*                  /!*<svg className="icon icon--file" width="24px" height="24px">*!/*/}
        {/*                  /!*  <use xlink:href="#file"></use>*!/*/}
        {/*                  /!*</svg>*!/*/}

        {/*                </div>*/}
        {/*                <label htmlFor="file-2"><span>Добавить файл</span>*/}
        {/*                </label>*/}
        {/*                <div className="label-remove">*/}
        {/*                  /!*<svg className="icon icon--remove" width="10px" height="10px">*!/*/}
        {/*                  /!*  <use xlink:href="#icon-remove"></use>*!/*/}
        {/*                  /!*</svg>*!/*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="form__footer">*/}
        {/*          <button className="btn btn--lg btn--yellow" id="send-message" type="submit">Отправить</button>*/}
        {/*        </div>*/}
        {/*      </form>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
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
  }
`;
