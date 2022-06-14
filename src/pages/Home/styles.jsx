import styled from 'styled-components';

const StyledHome = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '40px')};

  height: 100vh;
  width: 100vw;

  color: white;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default StyledHome;
