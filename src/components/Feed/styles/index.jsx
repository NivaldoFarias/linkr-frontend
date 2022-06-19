import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '43px')};

  width: 100%;
  margin-top: 78px;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', 'initial')};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: left;
  width: 100%;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

const UserThumbnail = styled.img`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', 'initial')};
  margin-right: 20px;
  height: 50px;
  width: 50px;

  object-fit: cover;
  border-radius: 50%;
  background-color: rgb(255, 248, 241);
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '30px')};
  padding: 36px 24px;

  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary};

  background: linear-gradient(
    to top,
    rgba(253, 235, 220, 1) 0%,
    rgba(255, 248, 241, 1) 3%,
    rgba(255, 248, 241, 1) 97%,
    rgba(253, 235, 220, 1) 100%
  );
  background-color: rgb(255, 248, 241);
`;

const Posts = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '16px')};
`;

export { Wrapper, Header, Title, UserThumbnail, Content, Posts };
