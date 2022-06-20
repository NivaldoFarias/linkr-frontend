import styled from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'flex-start', '0px')};
  padding: 10px 20px;
  height: 72px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  .logo-container {
    ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '15px')};
    height: 100%;
    width: fit-content;

    > * {
      cursor: pointer;
    }
    > img {
      width: 45px;
    }
  }
`;

export const Title = styled.h1`
  padding-top: 10px;
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.altTertiary};
  font-family: ${(props) => props.theme.fonts.logotype};
`;
