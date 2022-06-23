import styled from 'styled-components';

const LoadingContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '18px')};
  padding: 18px;
  width: 100%;

  background-color: transparent;
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

export default LoadingContainer;
