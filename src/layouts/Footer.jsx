import React from 'react';
import styled from '@emotion/styled';

import { GetStarted } from './NavBar';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  height: 350px;
  background-color: ${props => props.theme.colors.dark.base};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: space-around;
  margin-top: 100px;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.base};
  display: flex;
`;

const FooterLink = styled.a`
  font-weight: 500;
  margin-right: 5em;
  color: ${props => props.theme.colors.white.base};
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.blue.base};
  }
`;

const Newsletter = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 3rem;
`;

const NewsletterText = styled.p`
  color: ${props => props.theme.colors.white.base};
  font-size: 14pt;
  margin-right: 2rem;
`;

const NewsletterInput = styled.input`
  border: 2px solid ${props => props.theme.colors.green.base};
  border-radius: 5px;
  height: 45px;
  padding: 5px;
  margin-right: 1rem;
  ::placeholder {
    font-size: 12pt;
  }
`;

const Footer = () => (
  <Wrapper>
    <Newsletter>
      <NewsletterText>Subscribe to our Newsletter!</NewsletterText>
      <NewsletterInput placeholder="Insert your email..." />
      <GetStarted>Send</GetStarted>
    </Newsletter>
    <FooterLinks>
      <Text>
        <FooterLink href="https://scope.ink/about">About</FooterLink>
        <FooterLink href="https://scope.ink/jobs">Jobs</FooterLink>
        <FooterLink href="https://scope.ink/contact">Contact</FooterLink>
      </Text>
      <Text>
        <FooterLink href="https://scope.ink/terms">Terms of Service</FooterLink>
        <FooterLink href="https://scope.ink/privacy">Privacy Policy</FooterLink>
        <FooterLink href="https://scope.ink/cookies">Cookies</FooterLink>
        <FooterLink href="https://scope.ink/security">Security</FooterLink>
      </Text>
    </FooterLinks>
  </Wrapper>
);
export default Footer;
