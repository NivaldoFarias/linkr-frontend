import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.position('relative', '0px', '0px', 'initial', 'initial')};

  padding: 8px 0;
  height: fit-content;
  width: 100%;

  color: white;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.fonts.primary};

  cursor: pointer;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;
`;

export default StyledButton;
