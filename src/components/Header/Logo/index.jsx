import styled from 'styled-components';

const Title = styled.h1`
  font-size: 49px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.logotype};
  letter-spacing: 0.05em;
`;

export default function Logo() {
  return <Title>linkr</Title>;
}
