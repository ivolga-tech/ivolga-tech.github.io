import { Image } from "../entity/image";

type Big_screenshot = {
  big_screenshot: {
    url: string;
    alt?: string;
  };
};

type Screenshot = {
  screenshot_gallery: {
    url?: string;
    alt?: string;
  };
};

type ProductPageVM = {
  product_logo?: Image;
  product_title: { text: string }[];
  product_description: { text: string }[];
  about_the_project_title: { text: string }[];
  about_the_project: { text: string }[];
  big_screenshot_title: { text: string }[];
  big_screenshot_description: { text: string }[];
  big_screenshot_field: Big_screenshot[];
  sub_description_title: { text: string }[];
  sub_description: { text: string }[];
  screenshot_gallery_field: Screenshot[];
};

export const toProductPageVM = (productPage: ProductPageVM) => {
  const {
    product_logo,
    about_the_project,
    about_the_project_title,
    big_screenshot_description,
    big_screenshot_field,
    big_screenshot_title,
    product_description,
    product_title,
    screenshot_gallery_field,
    sub_description,
    sub_description_title,
  } = productPage;

  return {
    logo: product_logo,
    product_title: product_title.length > 0 ? product_title[0].text : "",
    product_description: product_description.length > 0 ? product_description[0].text : "",
    about_the_project_title:
      about_the_project_title.length > 0 ? about_the_project_title[0].text : "",
    about_the_project: about_the_project.length > 0 ? about_the_project[0].text : "",
    big_screenshot_title: big_screenshot_title.length > 0 ? big_screenshot_title[0].text : "",
    big_screenshot_description:
      big_screenshot_description.length > 0 ? big_screenshot_description[0].text : "",
    big_screenshot:
      big_screenshot_field.length > 0 && big_screenshot_field[0].big_screenshot.url
        ? big_screenshot_field.map(screenshot => {
            return {
              src: screenshot.big_screenshot.url,
              alt: screenshot.big_screenshot.alt,
            };
          })
        : [],
    sub_description_title: sub_description_title.length > 0 ? sub_description_title[0].text : "",
    sub_description: sub_description.length > 0 ? sub_description[0].text : "",
    screenshot_gallery:
      screenshot_gallery_field.length > 0 && screenshot_gallery_field[0].screenshot_gallery.url
        ? screenshot_gallery_field.map(screenshot => {
            return {
              src: screenshot.screenshot_gallery.url,
              alt: screenshot.screenshot_gallery.alt,
            };
          })
        : [],
  };
};
