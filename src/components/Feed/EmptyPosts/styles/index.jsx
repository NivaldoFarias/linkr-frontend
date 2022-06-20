import styled from 'styled-components';

const EmptyPostsContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '25px')};
  padding: 18px;
  min-height: 625px;
  height: 100%;
  width: 100%;

  font-size: 2.3rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};

  > svg {
    font-size: 5rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default EmptyPostsContainer;
