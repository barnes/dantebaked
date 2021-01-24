import React from 'react';
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  padding:10px;
  margin: 10px;
  ul{
    list-style-type:none;
    margin: 0;
    padding: 0;
    display: flex;
    
  }
  li a {
    display: block;
    background-color: #7DAF9C;
    padding: 10px;
    margin:5px;
    box-shadow: 5px 10px #888888;
    border-color: none;
  }
  
`;

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }   
    } 
  `);
  const pages = data.allSanityPage.nodes;

  console.log("NAV SLUG");
  pages.map((page) =>
    console.log(page.slug.current)
  )


  return (
    <>
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {pages.map((page) =>
          <li>
            <Link to={"/"+page.slug.current}>{page.title}</Link>
          </li>
        )}
      </ul>
    </NavStyles>
    </>
  )

}
  