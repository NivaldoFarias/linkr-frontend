import styled from 'styled-components';

const StyledPage = styled.section`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '15px')}
  padding: 0 24px;
  height: 100%;
  min-width: 425px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.foreground};

  .signup-form {
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '40px')}
    position: relative;
    height: fit-content;
    min-width: 100%;
  }
`;

export default StyledPage;
