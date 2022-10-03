import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Styles
import { Wrapper } from '../styles/Promotion-template.styles';
// Component
import Layout from '../components/layout';
import Seo from '../components/seo';

interface IProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        image: {
          childImageSharp: any;
        };
      };
    };
  };
}

const ProjectDetails: React.FC<IProps> = ({ data }) => {
  const { title, image } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  console.log(data);
  return (
    <Layout>
      <Wrapper>
        <div className="heading">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div className="img-wrapper">
          <GatsbyImage image={getImage(image.childImageSharp)} alt={title} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query getPromotionPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export const Head: React.FC<IProps> = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
);

export default ProjectDetails;
