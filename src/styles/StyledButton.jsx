import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.position('relative', '0px', '0px', 'initial', 'initial')};

  padding: 8px 0;
  height: fit-content;
  width: 100%;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.fonts.primary};

  cursor: pointer;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;

  &:hover {
    filter: brightness(2);
  }

  @media screen and (min-width: 750px) {
    font-size: 2.3rem;
  }
`;

export default StyledButton;
