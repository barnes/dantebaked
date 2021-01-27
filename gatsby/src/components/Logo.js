import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const LogoStyles = styled.div`
  padding:20px;
  margin: 20px;
  //box-shadow: 5px 10px #888888;
  //background-color: #B5838D;
  font-size:11px;
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 250px;
    width:250px;
    filter: drop-shadow(0 0 1rem black);
  }
`;

export default function Logo() {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(maxWidth:250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    console.log("LOGO");
    console.log({data});
    return (
        <LogoStyles>
           <Img fluid={data.file.childImageSharp.fluid} /> 
        </LogoStyles>
        
    );
  }
