import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  background-color: #B5838D;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

export default function Header() {
    return (
        <HeaderStyles>
            <h1>Dante Baked</h1>
            <h2>Bakin' Good Shit Since 2020</h2>
        </HeaderStyles>
        
    );
}

