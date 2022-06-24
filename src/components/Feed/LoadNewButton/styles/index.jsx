import styled from 'styled-components';

export const Button = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 30px;
  font-family: ${(props) => props.theme.fonts.secondary};
  cursor: pointer;
  border-radius: ${(props) => props.theme.styles.borderRadius};
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
