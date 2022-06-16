import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexbox('initial', 'center', 'center', 'initial')};

  color: white;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

export default StyledLink;
