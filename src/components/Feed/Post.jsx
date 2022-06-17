import styled from 'styled-components';
//import { FiHeart } from 'react-icons/fi';
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
              <PostImage src={post.urlPicture} />
            </ImageContainer>
          </LinkContainer>
          
        </Link>
      </Right>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  object-fit: cover;
  margin-bottom: 18px;
`;

const Right = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
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

const Link = styled.a`
  text-decoration: none;
  cursor: pointer !important;

`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 155px;
  flex: 0 0 auto;
  border: ${({ theme }) => theme.styles.defaultBorder};
  border-radius: 11px;
  position: relative;
  overflow: hidden;

  cursor: pointer;


  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const LinkInfo = styled.div`
  padding: 16px;
  flex: 1 1 auto;
  height: 100%;
  cursor: pointer !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ImageContainer = styled.div`
  border-left: ${({ theme }) => theme.styles.defaultBorder};
  overflow: hidden;
  width: 155px;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;




const Title = styled.div`
  font-size: 17px;
  color: #cecece;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
const Description = styled.div`
  font-size: 12px;
  color: #9b9595;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 5px;
`;

const Url = styled.div`
  font-size: 12px;
  color: #cecece;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 13px;
  width: 100%;
  word-break: break-all;

`;
