import styled from 'styled-components';

const Bar = styled.div`
  background-color: white;
  height: 45px;
  border-radius: 8px;
  width: 100%;

  margin: 10px 20px;

  @media only screen and (min-width: 500px) {
    max-width: 300px;
    margin: none;
  }
`;

export default function SearchBar() {
  return <Bar></Bar>;
}
