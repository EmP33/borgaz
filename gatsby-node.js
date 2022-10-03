const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const subpageTemplate = path.resolve(`src/templates/subpage-details.tsx`);
  const promotionTemplate = path.resolve(
    `src/templates/promotion-template.tsx`,
  );
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const type = edge.node.frontmatter.type;

    if (type === `promocje`) {
      createPage({
        path: `/${type}/${slug}`,
        component: promotionTemplate,
        context: { slug: slug },
      });
    } else {
      createPage({
        path: `/${type}/${slug}`,
        component: subpageTemplate,
        context: { slug: slug },
      });
    }
  });
};
