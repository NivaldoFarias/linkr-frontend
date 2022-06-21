import styled from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'center', '0px')};
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.altTertiary};
`;

export const Main = styled.section`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', '25px')};
  position: relative;
  height: 100%;
  width: 100%;

  .aside-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-end', '35px')};
    padding-top: 45px;
    height: 100%;
    width: min-content;
  }
`;

export const Feed = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'initial', '15px')};
  height: 100%;
  width: 100%;
  max-width: 625px;
`;
