import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <FooterLink to="/">Go Home</FooterLink>
  </div>
);

export default NotFound;

export const FooterLink = styled(Link)`
  color: "black";
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
