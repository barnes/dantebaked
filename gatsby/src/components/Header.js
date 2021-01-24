import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  background-color: #F7BFB4;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

export default function Header() {
    return (
        <HeaderStyles>
            <h1>RB Gatsby Boilerplate</h1>
            <h2>It's a boilerplate.</h2>
        </HeaderStyles>
        
    );
  }