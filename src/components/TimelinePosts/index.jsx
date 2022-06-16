import { useCallback, useMemo } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import {
  Container,
  PostContainer,
  Left,
  ProfileImage,
  Right,
  UserName,
  PostText,
  LinkContainer,
  Link,
  LinkInfo,
  PostImage,
  Title,
} from './styles';

export default function TimelinePosts() {
  const mockPosts = useMemo(() => {
    return [
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
  }, []);
  //FcLike
  //FiHeart

  const RenderPosts = useCallback(() => {
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
  }, [mockPosts]);

  return (
    <Container>
      <RenderPosts />
    </Container>
  );
}
