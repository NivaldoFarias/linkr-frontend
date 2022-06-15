import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';

export default function TimelinePosts() {
  const mockPosts = [
    {
      url: 'https://www.youtube.com/watch?v=aJR7f45dBNs&ab_channel=FilipeDeschamps',
      title: 'Se Você Passar Por Esses 5 Desafios, Você Aprendeu React JS',
      description:
        'Aprender a programar do zero React JS é uma experiência SENSACIONAL quando feita do jeito certo, e nesse vídeo tutorial eu vou fazer você passar por 5 desafi...',
      image: 'https://i.ytimg.com/vi/aJR7f45dBNs/maxresdefault.jpg',
      username: 'Juvenal Juvêncio',
      profilePic:
        'https://play-lh.googleusercontent.com/8s3MKbQ-ymtRXFsYr8hrXdBDFJDfOVlQhtk6dKA4rwjlL2EOtq5d5tDscL8gOV2v_g=w526-h296-rw',
      postText: 'Veja o vídeo',
    },
    {
      url: 'https://www.youtube.com/watch?v=aJR7f45dBNs&ab_channel=FilipeDeschamps',
      title: 'Se Você Passar Por Esses 5 Desafios, Você Aprendeu React JS',
      description:
        'Aprender a programar do zero React JS é uma experiência SENSACIONAL quando feita do jeito certo, e nesse vídeo tutorial eu vou fazer você passar por 5 desafi...',
      image: 'https://i.ytimg.com/vi/aJR7f45dBNs/maxresdefault.jpg',
      username: 'FilipeDeschamps',
      profilePic:
        'https://play-lh.googleusercontent.com/8s3MKbQ-ymtRXFsYr8hrXdBDFJDfOVlQhtk6dKA4rwjlL2EOtq5d5tDscL8gOV2v_g=w526-h296-rw',
      postText: 'Veja o vídeo',
    },
    {
      url: 'https://www.youtube.com/watch?v=aJR7f45dBNs&ab_channel=FilipeDeschamps',
      title: 'Se Você Passar Por Esses 5 Desafios, Você Aprendeu React JS',
      description:
        'Aprender a programar do zero React JS é uma experiência SENSACIONAL quando feita do jeito certo, e nesse vídeo tutorial eu vou fazer você passar por 5 desafi...',
      image: 'https://i.ytimg.com/vi/aJR7f45dBNs/maxresdefault.jpg',
      username: 'FilipeDeschamps',
      profilePic:
        'https://play-lh.googleusercontent.com/8s3MKbQ-ymtRXFsYr8hrXdBDFJDfOVlQhtk6dKA4rwjlL2EOtq5d5tDscL8gOV2v_g=w526-h296-rw',
      postText: 'Veja o vídeo',
    },
  ];
  //FcLike
  //FiHeart

  const RenderPosts = () => {
    return mockPosts.map((post, index) => {
      return (
        <PostContainer key={index}>
          <Left>
            <ProfileImage src={post.profilePic} />
            <FcLike style={{ heigth: 50 }} />
          </Left>
          <Right>
            <UserName>{post.username}</UserName>
            <PostText>{post.postText}</PostText>
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
    });
  };

  return (
    <Container>
      <RenderPosts />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const PostContainer = styled.div`
  width: 611px;
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
  width: 503px;
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
