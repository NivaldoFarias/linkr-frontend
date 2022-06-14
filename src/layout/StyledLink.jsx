import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexbox('initial', 'center', 'center', 'initial')};

  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: blue;

  cursor: pointer;
`;

export default StyledLink;
