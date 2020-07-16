import React from "react";
import "./index.css";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Typography } from "../components/typography/typography";
import PortfolioContainer from "../components/portfolio/portfolio-container";
import VacanciesContainer from "../components/vacancies/vacancies";
import ContactsContainer from "../components/contacts/contacts-container";
import { toPortfolioVM } from "../presenters/portfolioVM.ts";
import { toVocationsVM } from "../presenters/vocationsVM";
import { toContactsPageVM } from "../presenters/contactsVM";

const IndexPage = (props: any) => {
  const vm = props.data.HomePage.edges[0].node.data;

  const PortfolioViewModel = toPortfolioVM(props.data.portfolio.edges[0].node.data.portfolio_field);

  const vacanciesViewModel = toVocationsVM(props.data.vacancies.edges[0].node.data);

  const contactsViewModel = toContactsPageVM(props.data.contacts.edges[0].node.data);

  return (
    <Layout contactsViewModel={contactsViewModel}>
      <SEO title="iVolga Technologies" />

      <section className="section section--slogan">
        <div className="slogan box">
          <div className="row">
            <div className="col col-xs-8 col-md-6">
              <Typography resetMargin={true} component="h1" className="slogan__title">
                {vm.home_page_title.text}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <PortfolioContainer viewModel={PortfolioViewModel} />

      <VacanciesContainer viewModel={vacanciesViewModel} />

      <ContactsContainer viewModel={contactsViewModel} />
    </Layout>
  );
};

export default IndexPage;

export const HomepPageQuery = graphql`
  query HomepPageData {
    HomePage: allPrismicHomepage {
      edges {
        node {
          data {
            home_page_title {
              text
            }
          }
        }
      }
    }

    portfolio: allPrismicHomepage {
      edges {
        node {
          data {
            portfolio_field {
              card_background_color
              page_link {
                text
              }
              portfolio_card_title {
                text
              }
              portfolio_card_meta_tegs {
                text
              }
              portfolio_card_description {
                text
              }
              portfolio_card_image {
                url
                alt
              }
            }
          }
        }
      }
    }

    vacancies: allPrismicHomepage {
      edges {
        node {
          data {
            vacancies_page_title {
              text
            }
            vacancies_page_description {
              text
            }
            vacancies_card_field {
              vacancies_page_link {
                text
              }
              card_logo {
                alt
                url
              }
              card_title {
                text
              }
              card_meta_tags {
                raw
              }
            }
          }
        }
      }
    }

    contacts: allPrismicHomepage {
      edges {
        node {
          data {
            contacts_title {
              text
            }
            contacts_subtitle {
              text
            }
            contacts_content {
              list_item_name {
                text
              }
              list_item_content {
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
    }
  }
`;
