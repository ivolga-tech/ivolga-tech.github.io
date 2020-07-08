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
  };
};

export type ContactsData = {
  title: {
    text: string;
  };
  subtitle: {
    text: string;
  };
  content: ListItem[];
  list_social_links: SocialLink[];
};

type ContactsItem = {
  name: string;
  content: string;
};

type SocialLinksItem = {
  logo: string;
  link: string;
};

export type ContactsPageVM = {
  title: string;
  subtitle: string;
  contacts: ContactsItem[];
  socialLinks: SocialLinksItem[];
};

export const toContactsPageVM = (contacts: ContactsData): ContactsPageVM => {
  const { title, content, list_social_links, subtitle } = contacts;

  return {
    title: title.text,
    subtitle: subtitle.text,
    contacts: content.map(contact => {
      const { list_item_name, list_item_content } = contact;
      return {
        name: list_item_name.text,
        content: list_item_content.text,
      };
    }),
    socialLinks: list_social_links.map(socialLink => {
      const { social_links, social_logo } = socialLink;
      return {
        logo: social_logo.url,
        link: social_links.url,
      };
    }),
  };
};
