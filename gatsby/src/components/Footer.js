import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background-color: #B5838D;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
  font-size:10px;
`;

export default function Footer() {
    return (
        <FooterStyles>
          <em>2021 - <a href="https://github.com/barnes">Designed with love by Ryan Barnes</a></em> 
        </FooterStyles>
        
    );
  }