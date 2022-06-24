import styled from 'styled-components';

export const Button = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  padding: 30px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
  cursor: pointer;

  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary};

  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.gradient} 0%,
    ${({ theme }) => theme.colors.altTertiary} 5%,
    ${({ theme }) => theme.colors.altTertiary} 95%,
    ${({ theme }) => theme.colors.gradient} 100%
  );

  :hover {
    filter: brightness(0.95);
  }
`;
