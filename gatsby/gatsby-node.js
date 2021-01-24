//const path = require("path");
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

async function turnPagesIntoPages({ graphql, actions }) {
    const PagesTemplate = path.resolve('./src/pages/pages.js');
    const { data } = await graphql(`
      query {
        pages: allSanityPage {
          nodes {
            id
            title
            slug {
              current
            }
            _rawText
          }
        }
      }
    `);
    data.pages.nodes.forEach((page) => {
      console.log('making page');
      actions.createPage({
        path: `/${page.slug.current}`,
        component: PagesTemplate,
        context: {
          title: page.title,
          text: page._rawText,

        },
      });
    });
}

export async function createPages(params) {
    await Promise.all([
      turnPagesIntoPages(params),
    ]);
  }