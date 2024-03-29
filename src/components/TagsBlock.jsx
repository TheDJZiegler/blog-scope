import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 1rem 1rem 0;
    color: ${props => props.theme.colors.dark.base};
    padding: 0.3rem 0.6rem;
    background: ${props => props.theme.colors.blue.base_50};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.base};
      background: ${props => props.theme.colors.blue.base};
      border: ${props => props.theme.colors.blue.light};
    }
  }
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <span>{upperTag}</span>
          </Link>
        );
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
