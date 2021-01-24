import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "fontsource-questrial";
import "fontsource-noto-sans-jp/700.css";
import "fontsource-nunito"
import Layout from "../components/Layout"

const ProjectStyles = styled.div`
  font-family: 'Nunito', sans-serif;
  background-color:#c1a1d3;
  margin:20px;
  display: flex;
  align-items: center;
  text-decoration:none;
  box-shadow: 5px 10px #888888;
`;

const ProjectLeft = styled.div`
  flex: 50%;
  padding:1rem 2rem;
`;

const ProjectRight = styled.div`
  flex: 50%;
  padding:1rem 2rem;
  background-color: white;
  height: 100%;
  
`;

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  console.log(projects);
  return (
    <>
    <Layout>
    {projects.map((project) => (
      <ProjectStyles key="{project.id}">
        <ProjectLeft>
          <Img fluid={project.image.asset.fluid} />
        </ProjectLeft>
        <ProjectRight>
          <span>{project.date}</span>
          <a href={project.link}><h1 class="button-lg">{project.title}</h1></a>
          <p>{project.description}</p> 
          <a class="button-sm" href={project.github}>Github</a>
        </ProjectRight>
      </ProjectStyles>
    ))} 
    </Layout>

    </>
    
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