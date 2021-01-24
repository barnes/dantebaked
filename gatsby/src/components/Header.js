import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import "@fontsource/bodoni-moda/700.css";

const HeaderStyles = styled.div`
  font-family: "Bodoni Moda";
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding:20px;
  margin: 20px;
  //box-shadow: 5px 10px #888888;
  //background-color: #B5838D;
  h1{
      margin:0px;
  }
  h2{
      margin:0px;
  }
`;

const LogoStyles = styled.div`
  display: grid;
  align-items:center;
  justify-items: center;
`;

const SocialStyles = styled.div`
  display: grid;
`;


export default function Header() {
    return (
        <HeaderStyles>
            <Nav/>
            <LogoStyles>
            <h1>Dante Baked</h1>
            </LogoStyles>
            <SocialStyles>
              
            </SocialStyles>
            
        </HeaderStyles>
        
    );
}

