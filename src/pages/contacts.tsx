import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import ContactsContainer from "../components/contacts/contacts-container";
import { graphql } from "gatsby";
import { toContactsPageVM } from "../presenters/contacts";
import { ContactsQueryData } from "../entity/pages/contacts";

const Contacts = (props: ContactsQueryData) => {
  const contactsViewModel = toContactsPageVM(props.data.HomePage.edges[0].node.data);

  return (
    <Layout>
      <SEO title="Contacts" />
      <ContactsContainer viewModel={contactsViewModel} />
    </Layout>
  );
};

export default Contacts;

export const ContactsQuery = graphql`
  query Contacts {
    HomePage: allPrismicHomepage {
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
