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
  width:600px;
  //box-shadow: 5px 10px #888888;
  .gatsby-image-wrapper {
    height: 400px;
  }
  form {
      line-height:2rem;
      textarea {
          padding:10px;
          width: 500px;
          margin:10px;
      }
      input {
          padding: 10px;
          margin: 10px;
          width: 500px;
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

export default function FindMe({ data }) {
  return (
    <Layout>
        <IndexStyles>
        <FormiumForm 
        data={data.formiumForm}
        onSubmit={async (values) => {
            await formium.submitForm('contact',values);
            alert('success');
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



