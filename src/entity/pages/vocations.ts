import { VocationsData } from "../../presenters/vocationsVM";

type Edges = {
  node: {
    data: VocationsData;
    uid: string;
  };
};

export type VacanciesQueryData = {
  data: {
    vacancies: {
      edges: Edges[];
    };
  };
};
