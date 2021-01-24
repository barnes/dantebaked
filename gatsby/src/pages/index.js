import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";
import "@fontsource/bodoni-moda/";

const IndexStyles = styled.div`
  font-family: "Bodoni Moda";
  background-color: #F7BFB4;
  padding:20px;
  margin: 20px;
  //box-shadow: 5px 10px #888888;
  .gatsby-image-wrapper {
    height: 400px;
  }
`;

export default function Index({ data }) {
  const pageData = data.pageData.nodes;
  console.log(pageData)
  return (
    <Layout>
    {pageData.map((page =>
    <IndexStyles>
      <>
        <Img fluid={page.image.asset.fluid} />
        <BlockContent blocks={page._rawText} />
        </>
    </IndexStyles>
    ))}
    
    </Layout>
    
  )
}

export const query = graphql`
  query {
    pageData: allSanityStaticpage(filter: {_id: {eq: "ba9f6083-3155-4c2d-992f-b1016517773a"}}) {
    nodes {
      _id
      _rawText
      image {
          asset {
            fluid(maxWidth: 1080) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }

`;


