import styled from 'styled-components';
import NewPost from './NewPost';
import Post from './Post';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 78px 0;
  gap: 43px;
`;

const Header = styled.h1`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: white;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Feed({ title, posts, canCreatePost }) {
  const postsElements = posts.map((post, index) => {
    return <Post key={index} post={post} />;
  });

  return (
    <Wrapper>
      <Header>{title}</Header>

      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        <Posts>{postsElements};</Posts>
      </Content>
    </Wrapper>
  );
}
