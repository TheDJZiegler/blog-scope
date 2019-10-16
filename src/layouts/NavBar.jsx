import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

import Logo from '../../static/logo/logotipo_blanco.svg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: -15px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: baseline;
  margin-right: 2em;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    margin-right: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
      cursor: pointer;
    }
  }
`;

const GetStarted = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.green.base};
  width: 150px;
  border-radius: 5px;
  height: 45px;
  margin-left: 30px;
  color: white;
  transition: all 0.5s;
  margin: 5px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  }
  &:hover {
    cursor: pointer;
    width: 170px;
    transition: 0.7s;
  }
`


const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="https://scope.ink">
      <img src={Logo} width="120" alt="Scope Logo" />
    </StyledLink>
    <Nav>
      <StyledLink>Product</StyledLink>
      <StyledLink>Pricing</StyledLink>
      <GetStarted><span>Get Started</span></GetStarted>
    </Nav>
  </Headroom>
);

export default NavBar;
