import styled from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'center', '0px')};
  padding-bottom: 30px;
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Main = styled.section`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'initial', '25px')};
  height: 100%;
  width: 100%;
`;

export const Feed = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'initial', '15px')};
  height: 100%;
  width: 100%;
  max-width: 611px;
`;
