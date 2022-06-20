import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  position: relative;
  width: 40%;
  .magnifying-glass {
    ${({ theme }) => theme.mixins.position('absolute', '11px', '15px', 'auto', 'auto')};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    z-index: 3;
    cursor: pointer;

    * {
      pointer-events: none;
    }
  }

  @media only screen and (max-width: 500px) {
    min-width: 180px;
  }
`;

export const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'flex-start', '0px')};
  background-color: ${({ theme }) => theme.colors.gradient};
  height: 45px;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  border: none;

  font-size: 1.2rem;

  text-indent: 17px;
  cursor: text;

  &::placeholder {
    font-size: 1.1rem;
  }
`;

export const StyledList = styled.ul`
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', '16px')}
  position: relative;
  z-index: 2;
  overflow-y: scroll;

  padding: 10px 17px 15px 17px;
  max-height: 18vh;
  width: 100%;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gradient};

  &::-webkit-scrollbar {
    -webkit-appearance: scrollbartrack-vertical;
  }
  li {
    figure {
      ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '12px')};
      flex-wrap: nowrap;
      cursor: pointer;

      > * {
        pointer-events: none;
      }
      img {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.colors.primary};
      }
      figcaption {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 23px;
        color: ${({ theme }) => theme.colors.mediumBlack};
      }
    }
  }
`;
