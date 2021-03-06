import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito"
import Layout from "../components/Layout"
import "@fontsource/bodoni-moda/";

const ProductStyles = styled.div`
  font-family: "Bodoni Moda";
  //background-color: #F7BFB4;
  padding:20px;
  margin: 20px;
  //box-shadow: 5px 10px #888888;
  .gatsby-image-wrapper {
    height: 600px;
  }

  @media (max-width: 768px) {
    .gatsby-image-wrapper {
    height: 200px;
  }
  }
`;

export default function Products({ data }) {
  const products = data.products.nodes;
  console.log(products);
  return (
    <>
    <Layout>
    {products.map((product) => (
        <ProductStyles key={product.id}>
            <Img fluid={product.image.asset.fluid} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </ProductStyles>
    ))}
    </Layout>

    </>
    
  )
}

export const query = graphql`
  query {
  products: allSanityProduct {
    nodes {
      id
      description
      title
      image {
          asset {
            fluid(maxWidth: 1080) {
              ...GatsbySanityImageFluid
            }
          }
        }
       price
    }
  }
    
  }
`;