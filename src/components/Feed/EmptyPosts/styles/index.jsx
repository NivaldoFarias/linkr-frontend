import styled from 'styled-components';

const EmptyPostsContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '18px')};
  padding: 18px;
  width: 100%;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.post};
`;

export default EmptyPostsContainer;
