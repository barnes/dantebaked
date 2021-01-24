import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background-color: #F7BFB4;
  padding:20px;
  margin: 20px;
  box-shadow: 5px 10px #888888;
`;

export default function Footer() {
    return (
        <FooterStyles>
          <em>2021 - <a href="https://github.com/barnes">Ryan Barnes</a></em> 
        </FooterStyles>
        
    );
  }