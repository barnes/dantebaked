import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  display: grid;
  align-items: center;
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
    padding: 10px;
    margin:5px;
    text-decoration:underline;
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
          <Link to="/products">The Goods</Link>
        </li>
        <li>
          <Link to="/findme">Find Me</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/dantebaked/">Insta</a>
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
  