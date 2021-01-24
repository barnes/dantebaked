import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";

const IndexStyles = styled.div`
  background-color: white;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

export default function FindMe({ data }) {
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
    pageData: allSanityStaticpage(filter: {_id: {eq: "5764fe9f-c752-4227-ad65-0a6527758b55"}}) {
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


