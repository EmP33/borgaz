import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
// Styles
import { Wrapper } from '../styles/Subpage.styles';
// Icons
import SubpageServices from '../components/SubpageServices/SubpageServices';
import Seo from '../components/seo';

interface IProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        type: string;
      };
    };
  };
}

const ProjectDetails: React.FC<IProps> = ({ data }) => {
  const { title, type } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <Wrapper>
        <div className="heading">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <StaticImage
          alt="technika grzewcza"
          src="../images/slides/slide2.jpg"
        />
        <SubpageServices type={type} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query getSubpage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
      }
    }
  }
`;

export const Head: React.FC<IProps> = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
);

export default ProjectDetails;
