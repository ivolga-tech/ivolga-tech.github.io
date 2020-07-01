type Params = {
  size: number;
  size2?: number;
  text?: string;
};

export const CreateImage = (params: Params) => {
  const { size, size2, text } = params;

  return `https://via.placeholder.com/${
    size && size2 ? size + "x" + size2 : size
  }${text ? "?text=" + text : ""}`;
};

export const joinCssClasses = (
  ...cssClasses: (string | boolean | undefined)[]
): string => {
  return cssClasses.filter(Boolean).join(" ").trim();
};
