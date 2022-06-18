import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 72px;
  width: 100%;
  ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'flex-start', '0px')};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  & {
    color: white;
  }
`;

export const Title = styled.h1`
  font-size: 49px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.logotype};
  letter-spacing: 0.05em;
`;
