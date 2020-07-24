import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import VacanciesContainer from "../components/vacancies/vacancies";
import { graphql } from "gatsby";
import { toVocationsVM } from "../presenters/vocationsVM";
import { toContactsPageVM } from "../presenters/contactsVM";

const Vocations = (props: any) => {
  const viewModel = toVocationsVM(props.data.vacancies.edges[0].node.data);

  const contactsViewModel = toContactsPageVM(props.data.contacts.edges[0].node.data);

  return (
    <Layout contactsViewModel={contactsViewModel}>
      <SEO title="vocations" />
      <VacanciesContainer viewModel={viewModel} />
    </Layout>
  );
};

export default Vocations;

export const VocationsQuery = graphql`
  query VacancyPage {
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
