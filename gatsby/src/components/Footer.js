import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  padding:20px;
  margin: 20px;
  //box-shadow: 5px 10px #888888;
  //background-color: #B5838D;
  font-size:11px;
`;

export default function Footer() {
    return (
        <FooterStyles>
          <em>2021 - <a href="https://github.com/barnes">Designed with love by Ryan Barnes</a></em> 
        </FooterStyles>
        
    );
  }