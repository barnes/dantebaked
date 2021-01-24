import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";

const PageStyles = styled.div`
  background-color: white;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

function blocksToText(blocks) {
  return blocks
    .map(block => block.children.map(child => child.text).join(''))
}


export default function Pages({ data, pageContext }) {
  console.log("PAGE TEST");
  console.log(pageContext.text);

  return (
    <>
    <Layout>
      <PageStyles>
        <h1>{pageContext.title}</h1>
        <Img fluid={pageContext.image} />
        <BlockContent blocks={pageContext.text} />
      </PageStyles>
    </Layout>

    </>
    
  )
}