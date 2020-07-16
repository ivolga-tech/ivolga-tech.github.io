import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import VacanciesContainer from "../components/vacancies/vacancies";
import { graphql } from "gatsby";
import { toVocationsVM } from "../presenters/vocationsVM";
import { VacanciesQueryData } from "../entity/pages/vocations";

const Vocations = (props: VacanciesQueryData) => {
  const viewModel = toVocationsVM(props.data.vacancies.edges[0].node.data);

  return (
    <Layout>
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
  }
`;
