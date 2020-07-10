import React from "react";
import "./product-page.css";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import SEO from "../seo";
import { Typography } from "../typography/typography";
import Card from "../card/card";

const ProductPage = ({ data: { prismicProductPage } }: any) => {
  const { data } = prismicProductPage;
  console.log(data);

  const {
    product_logo,
    product_title,
    product_description,
    about_the_project_title,
    about_the_project,
    big_screenshot_title,
    big_screenshot_description,
    big_screenshot_field,
    sub_description_title,
    sub_description,
    screenshot_gallery_field,
  } = data;

  return (
    <Layout>
      <SEO title={data.product_title[0].text} />

      <div className="project">
        <div className="project__card">
          <Card className="card--header mt-40 card--lighgrey">
            <div className="card__img no-border">
              <img src={product_logo.url} alt={product_logo.alt} title={product_title[0].text} />
            </div>
            <div className="card__content">
              <div className="card__title">{product_title[0].text}</div>
              <div className="card__desc">{product_description[0].text}</div>
            </div>
          </Card>
        </div>
        <div className="project__block mt-100">
          <div className="block">
            <div className="block__title">
              <Typography component="h2" resetMargin={true}>
                {about_the_project_title[0].text}
              </Typography>
            </div>
            <Typography className="block__subtitle">{about_the_project[0].text}</Typography>
          </div>
        </div>

        {big_screenshot_title[0].text &&
          big_screenshot_description[0].text &&
          big_screenshot_field && (
            <div className="project__block mt-100">
              <div className="block">
                <div className="block__title">
                  <Typography component="h2" resetMargin={true}>
                    {big_screenshot_title[0].text}
                  </Typography>
                </div>
                <Typography className="block__subtitle">
                  {big_screenshot_description[0].text}
                </Typography>
              </div>
              <div className="block block--img">
                {big_screenshot_field.map(
                  (image: { big_screenshot: { url: string; alt: string } }) => {
                    return (
                      <div key={image.big_screenshot.alt} className="block__img">
                        <img
                          src={image.big_screenshot.url}
                          alt={image.big_screenshot.alt}
                          title="Waitre"
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}

        {sub_description_title[0].text && sub_description[0].text && screenshot_gallery_field && (
          <div className="project__block mt-100">
            <div className="block">
              <div className="block__title">
                <Typography resetMargin={true} component="h2">
                  {sub_description_title[0].text}
                </Typography>
              </div>
              <Typography className="block__subtitle">
                {sub_description[0].text}

                <div className="row row--out mt-40">
                  {screenshot_gallery_field.map((image: any) => {
                    return (
                      <div className="block block--img block--img-440 col-xs-12 col-sm-6">
                        <div className="block__img">
                          <img
                            src={image.screenshot_gallery.url}
                            alt={image.screenshot_gallery.url}
                            title={image.screenshot_gallery.url}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Typography>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;

export const pageQuery = graphql`
  query ProductPageSlug($uid: String) {
    prismicProductPage(uid: { eq: $uid }) {
      uid
      data {
        product_logo {
          alt
          url
        }
        product_title {
          text
        }
        product_description {
          text
        }
        about_the_project_title {
          text
        }
        about_the_project {
          text
        }
        big_screenshot_title {
          text
        }
        big_screenshot_description {
          text
        }
        big_screenshot_field {
          big_screenshot {
            alt
            url
          }
        }
        sub_description_title {
          text
        }
        sub_description {
          text
        }
        screenshot_gallery_field {
          screenshot_gallery {
            url
          }
        }
      }
    }
  }
`;
