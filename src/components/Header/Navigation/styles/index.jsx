import styled from 'styled-components';

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '20px')};
  height: fit-content;
  width: 120px;
  position: relative;

  color: ${({ theme }) => theme.colors.altTertiary};

  > * {
    cursor: pointer;
  }
  > svg {
    font-size: 2rem;
    * {
      pointer-events: none;
    }
  }
  > img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 2px solid white;
  }
  .dropdown-menu {
    ${({ theme }) => theme.mixins.position('absolute', 'initial', '0', '-50px', 'initial')};
    ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '10px')};
    height: fit-content;
    width: 100%;

    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;

    > * {
      cursor: pointer;
    }
    &__icon {
      font-size: 2rem;
      transition: all 0.1s ease-in-out;
      * {
        pointer-events: none;
      }
    }
    &__text {
      font-size: 1.2rem;
      font-weight: bold;
      font-family: ${({ theme }) => theme.fonts.secondary};
    }
    &.collapsed {
      ${({ theme }) => theme.mixins.position('absolute', 'initial', '0', '0', 'initial')};
      background-color: transparent;
      pointer-events: none;
      height: 0 !important;

      * {
        color: transparent;
      }
    }
  }
`;

export default StyledNav;
