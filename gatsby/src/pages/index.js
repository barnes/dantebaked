import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito";
import Layout from "../components/Layout";

const IndexStyles = styled.div`
  background-color: white;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

export default function Index({ data }) {
  const projects = data.projects.nodes;
  console.log(projects);
  return (
    <Layout>
    <IndexStyles>
      <h1>Ryan's Gatsby Boilerplate</h1>
      <p>A quick and dirty Gatsby & Sanity boilerplate. Few schemas, layouts, styling.</p>
    </IndexStyles>
    
    </Layout>
    
  )
}

export const query = graphql`
  query {
  projects: allSanityProject {
    nodes {
      id
      description
      title
      image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      link
      github
      date
    }
    }
    
  }
`;


