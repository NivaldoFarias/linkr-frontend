import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';

export default function Post({ post }) {
  return (
    <PostContainer>
      <Left>
        <ProfileImage src={post.picture_url} />
        <FcLike style={{ heigth: 50 }} />
      </Left>
      <Right>
        <UserName>{post.username}</UserName>
        <PostText>{post.text}</PostText>
        <LinkContainer>
          <Link href={post.url}>
            <LinkInfo>
              <Title>{post.title}</Title>
            </LinkInfo>
            <PostImage src={post.image} />
          </Link>
        </LinkContainer>
      </Right>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 100%;
  height: 276px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 18px;
  display: flex;
`;
const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-right: 16px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  object-fit: cover;
  margin-bottom: 18px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 8;
`;

const UserName = styled.div`
  font-size: 19px;
  margin-bottom: 4px;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 7px;
`;

const PostText = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.post};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 16px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 155px;
  border: ${({ theme }) => theme.styles.defaultBorder};
  border-radius: 11px;
  position: relative;
`;
const Link = styled.a`
  text-decoration: none;
`;

const LinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`;

const PostImage = styled.img`
  width: 153.44px;
  height: 153px;
  border-radius: 0px 12px 13px 0px;
  object-fit: fill;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;
const Title = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.post};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
