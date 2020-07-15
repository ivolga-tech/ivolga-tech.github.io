import { ContactsData } from "../../presenters/contactsVM";

type Edges = {
  node: {
    data: ContactsData;
  };
};

export type ContactsQueryData = {
  data: {
    contacts: {
      edges: Edges[];
    };
  };
};
