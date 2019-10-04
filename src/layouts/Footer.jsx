import React from 'react';
import styled from '@emotion/styled';

import * as theme from '../theme'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  height: 250px;
  background-color: ${theme.DARKER_BLUE};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>

    </Text>
  </Wrapper>
);
export default Footer;
