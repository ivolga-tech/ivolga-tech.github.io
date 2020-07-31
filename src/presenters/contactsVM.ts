import { Image } from "../entity/image";

type ListItem = {
  list_item_name: {
    text: string;
  };
  list_item_content: {
    text: string;
  };
};

type SocialLink = {
  social_links: {
    url: string;
  };
  social_logo: {
    url: string;
    alt: string;
  };
};

export type ContactsData = {
  contacts_title: {
    text: string;
  };
  contacts_subtitle: {
    text: string;
  };
  contacts_content: ListItem[];
  list_social_links: SocialLink[];
};

type ContactsItem = {
  name: string;
  content: string;
};

type SocialLinksItem = {
  logo: Image;
  link: string;
};

export type ContactsPageVM = {
  title: string;
  subtitle: string;
  contacts: ContactsItem[];
  socialLinks: SocialLinksItem[];
};

export const toContactsPageVM = (contacts: ContactsData): ContactsPageVM => {
  const { contacts_title, contacts_subtitle, contacts_content, list_social_links } = contacts;

  return {
    title: contacts_title ? contacts_title.text : "",
    subtitle: contacts_subtitle ? contacts_subtitle.text : "",
    contacts:
      contacts_content.length > 0 && contacts_content[0].list_item_name
        ? contacts_content.map(contact => {
            const { list_item_name, list_item_content } = contact;
            return {
              name: list_item_name.text,
              content: list_item_content.text,
            };
          })
        : [],
    socialLinks:
      list_social_links.length > 0 && list_social_links[0].social_links
        ? list_social_links.map(socialLink => {
            const { social_links, social_logo } = socialLink;
            return {
              logo: social_logo,
              link: social_links.url,
            };
          })
        : [],
  };
};
