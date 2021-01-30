import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";
import "@fontsource/bodoni-moda/";
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';

const IndexStyles = styled.div`
  font-family: "Bodoni Moda";
  margin: auto;
  //background-color: #F7BFB4;
  padding:20px;
  width:50%;
  //box-shadow: 5px 10px #888888;
  .gatsby-image-wrapper {
    height: 400px;
  }
  form {
      line-height:2rem;
      textarea {
          padding:10px;
          width: 100%;
          margin:10px;
      }
      input {
          padding: 10px;
          margin: 10px;
          width: 100%;
      }
      label {
          font-size:18px;
          display: block;
      }
      button {
        background-color: #221E22;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }
  }
`;

export default function ContactMe({ data }) {
    const [success, setSuccess] = React.useState(false);
    if (success) {
      return(
        <Layout>
        <IndexStyles>
        <div><h1>Thank you! Your response has been recorded.</h1></div>
        </IndexStyles>
        </Layout>
      )
    }
  return (
    <Layout>
        <IndexStyles>
        <FormiumForm 
        data={data.formiumForm}
        onSubmit={async (values) => {
            await formium.submitForm('contact',values);
            setSuccess(true);
        }} />
        </IndexStyles>
    
    </Layout>
    
  )
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "contact" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;



