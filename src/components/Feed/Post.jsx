import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';

/**
 * 
 * {
        id: 1,
        text: 'Veja que legal!!',
        url: 'https://www.youtube.com/watch?v=aJR7f45dBNs&ab_channel=FilipeDeschamps',
        urlPictureUrl: 'https://i.ytimg.com/vi/aJR7f45dBNs/maxresdefault.jpg',
        urlTitle: 'Se Você Passar Por Esses 5 Desafios, Você Aprendeu React JS',
        urlDescription: 'Aprender a programar do zero React JS é uma experiência SENSACIONAL quando feita do jeito certo, e nesse vídeo tutorial eu vou fazer você passar por 5 desafi...',
        userId: 5,
        userPictureUrl: 'https://play-lh.googleusercontent.com/8s3MKbQ-ymtRXFsYr8hrXdBDFJDfOVlQhtk6dKA4rwjlL2EOtq5d5tDscL8gOV2v_g=w526-h296-rw',
        numberOfLikes: 12,
        isLiked: false,
        likesLabel: 'Ricardo e Maria +56 pessoas'
    },
 */

export default function Post({ post }) {
  return (
    <PostContainer key={post.id}>
      <Left>
        <ProfileImage src={post.userPictureUrl} />
        <FcLike />
      </Left>
      <Right>
        <UserName>{post.username}</UserName>
        <PostText>{post.text}</PostText>
        <Link href={post.url} target='blank'>
          <LinkContainer>
            <LinkInfo>
              <Title>{post.urlTitle}</Title>
              <Description>{post.urlDescription}</Description>
              <Url>{post.url}</Url>
            </LinkInfo>
            <ImageContainer>
              <PostImage src={post.urlPictureUrl} />
            </ImageContainer>
          </LinkContainer>
        </Link>

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
  padding: 16px;
  flex: 8;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  `;

const PostImage = styled.img`
  width: 153.44px;
  height: 153px;
  border-radius: 0px 12px 13px 0px;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 17px;
  color: #CECECE;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding-bottom: 6px;
`;
const Description = styled.div`
  font-size: 12px;
  color: #9B9595;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 4px;
  padding-bottom: 6px;
`;

const Url = styled.div`
  font-size: 12px;
  color: #CECECE;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 4px;
`;