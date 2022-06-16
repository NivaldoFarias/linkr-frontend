import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'center', '0px')};
`;

export const Main = styled.main`
  flex: 1 1 auto;
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', '25px')};
`;

export const Feed = styled.div`
  width: 611px;
  max-width: 611px;
  flex: 0 0 auto;
`;
