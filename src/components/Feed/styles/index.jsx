import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', '43px')};
  padding: 78px 0;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '0px')};
`;

const Title = styled.h1`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: ${({theme}) => theme.colors.white};
`;

const UserThumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.thumbnailBackground};
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '0px')};
  margin-right: 20px;
  object-fit: cover;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '30px')};
`;

const Posts = styled.div`
${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', '16px')};
`;

export { Wrapper, Header, Title, UserThumbnail, Content, Posts };
