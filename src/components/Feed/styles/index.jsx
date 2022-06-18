import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '43px')};

  width: 100%;
  padding: 78px 0;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', 'initial')};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logotype};
  text-align: left;
  width: 100%;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: white;
`;

const UserThumbnail = styled.img`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', 'initial')};
  margin-right: 20px;
  height: 50px;
  width: 50px;

  object-fit: cover;
  border-radius: 50%;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '30px')};
`;

const Posts = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '16px')};
`;

export { Wrapper, Header, Title, UserThumbnail, Content, Posts };
