import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import '../styles/burger.css';

export default function ResponsiveNav() {

  const [open, setOpen] = useState(false);

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
      
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div> 
    
    </>
  )

}

function myFunction() {
  const x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 
  