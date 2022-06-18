import styled from 'styled-components';
import NewPost from './NewPost';
import Post from './Post/ index';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 78px 0;
  gap: 43px;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled.h1`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: white;
`;

const UserThumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export default function Feed({ title, posts, canCreatePost, userThumbnail, updatePostsFunction }) {
  const postsElements = posts.map((post, index) => {
    return <Post key={index} post={post} />;
  });

  return (
    <Wrapper>
      <Header>
        {userThumbnail ? <UserThumbnail src={userThumbnail} /> : <></>}
        <Title>{title}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost updatePostsFunction={updatePostsFunction} /> : <></>}
        <Posts>{posts.length > 0 ? postsElements : <h1>Não tem posts ainda</h1>}</Posts>
      </Content>
    </Wrapper>
  );
}
