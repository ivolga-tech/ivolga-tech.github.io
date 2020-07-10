import React from "react";
import "./product-page.css";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import SEO from "../seo";
import { Typography } from "../typography/typography";
import Card from "../card/card";
import { toProductPageVM } from "../../presenters/product-page";

const ProductPage = ({ data: { prismicProductPage } }: any) => {
  const { data } = prismicProductPage;

  const viewModel = toProductPageVM(data);

  const {
    logo,
    product_title,
    product_description,
    about_the_project_title,
    about_the_project,
    big_screenshot_title,
    big_screenshot_description,
    big_screenshot,
    sub_description_title,
    sub_description,
    screenshot_gallery,
  } = viewModel;

  return (
    <Layout>
      <SEO title={product_title} />

      <div className="project">
        <div className="project__card">
          <Card className="card--header mt-40 card--lighgrey">
            {logo?.url && (
              <div className="card__img no-border">
                <img src={logo.url} alt={logo.alt} title={product_title} />
              </div>
            )}
            {product_title && (
              <div className="card__content">
                <div className="card__title">{product_title}</div>
                <div className="card__desc">{product_description}</div>
              </div>
            )}
          </Card>
        </div>
        <div className="project__block mt-100">
          <div className="block">
            <div className="block__title">
              <Typography component="h2" resetMargin={true}>
                {about_the_project_title}
              </Typography>
            </div>
            <Typography className="block__subtitle">{about_the_project}</Typography>
          </div>
        </div>

        {big_screenshot_title && big_screenshot_description && big_screenshot && (
          <div className="project__block mt-100">
            <div className="block">
              <div className="block__title">
                <Typography component="h2" resetMargin={true}>
                  {big_screenshot_title}
                </Typography>
              </div>
              <Typography className="block__subtitle">{big_screenshot_description}</Typography>
            </div>
            <div className="block block--img">
              {big_screenshot.map(image => {
                return (
                  <div key={image.src} className="block__img">
                    <img src={image.src} alt={image.alt} title="Waitre" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {screenshot_gallery && (
          <div className="project__block mt-100">
            <div className="block">
              <div className="block__title">
                {sub_description_title && (
                  <Typography resetMargin={true} component="h2">
                    {sub_description_title}
                  </Typography>
                )}
              </div>
              <Typography component="div" className="block__subtitle">
                {sub_description}

                <div className="row row--out mt-40">
                  {screenshot_gallery.map(image => {
                    return (
                      <div
                        key={image.src}
                        className="block block--img block--img-440 col-xs-12 col-sm-6"
                      >
                        <div className="block__img">
                          <img src={image.src} alt={image.alt} title={image.alt} />
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
            alt
            url
          }
        }
      }
    }
  }
`;
