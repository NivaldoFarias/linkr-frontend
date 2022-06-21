import styled from 'styled-components';

const StyledCommentSection = styled.section`
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'center', '5px')};
  height: 100%;
  min-height: 130px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export default StyledCommentSection;
