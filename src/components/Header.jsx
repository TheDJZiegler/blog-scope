import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import {Logo} from '../../static/logo/logotipo.svg'


const Wrapper = styled.header`
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: ${props => props.theme.colors.dark.base};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.base};
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img src={Logo} fluid={cover || {} || [] || ''} />
    <Text>
      <h1>All your <span style={{color: props => props.theme.colors.blue.base}}>team</span> <span style={{color: props => props.theme.colors.red.base}}>insights</span> in a single dashboard</h1>
      <h3 style={{fontSize: 12}}>{date}</h3>
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
