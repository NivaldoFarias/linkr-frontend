import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexbox('initial', 'center', 'center', 'initial')};

  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  outline: none;
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 750px) {
    font-size: 1.1rem;
  }
`;

export default StyledLink;
