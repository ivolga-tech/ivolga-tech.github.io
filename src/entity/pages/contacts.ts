import { ContactsData } from "../../presenters/contacts";

export type Edges = {
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
