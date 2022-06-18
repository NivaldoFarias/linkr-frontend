import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGray};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  position: relative;
  width: 40%;
  .magnifying-glass {
    ${({ theme }) => theme.mixins.position('absolute', '11px', '15px', 'auto', 'auto')};
    color: ${({ theme }) => theme.colors.magnifyingIcon};
    width: 21px;
    height: 21px;
    z-index: 3;
  }

  @media only screen and (max-width: 500px) {
    min-width: 180px;
  }
`;

export const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'flex-start', '0px')};
  background-color: ${({ theme }) => theme.colors.white};
  height: 45px;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  border: none;
  text-indent: 17px;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', '16px')}
  overflow-y: scroll;
  width: 100%;
  padding: 10px 17px 23px 17px;
  max-height: 18vh;
  &::-webkit-scrollbar {
    -webkit-appearance: scrollbartrack-vertical;
  }
  li {
    cursor: pointer;
    figure {
      ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '0px')};
      flex-wrap: nowrap;
      img {
        width: 39px;
        height: 39px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 12px;
      }
      figcaption {
        font-family: ${({ theme }) => theme.colors.secondary};
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: ${({ theme }) => theme.colors.mediumBlack};
      }
    }
  }
`;
