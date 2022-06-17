import { Wrapper, Header, Title, UserThumbnail, Content, Posts } from './styles/';
import NewPost from './NewPost/';
import Post from './Post/';

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
