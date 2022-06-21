import { Wrapper, Header, Title, UserThumbnail, Content, Posts } from './styles/';
import NewPost from './NewPost/';
import Post from './Post/';
import EmptyPosts from './EmptyPosts/';
import { FeedProvider } from '../../hooks/FeedContext';
import { PostProvider } from '../../hooks/PostContex';

export default function Feed({ title, posts, canCreatePost, userThumbnail, updatePostsFunction }) {
  const postsElements = posts.map((post, index) => {
    return (
      <PostProvider key={index} post={post}>
        <Post />
      </PostProvider>
    );
  });

  return (
    <FeedProvider updatePostsFunction={updatePostsFunction}>
      <Wrapper>
        <Header>
          {userThumbnail ? <UserThumbnail src={userThumbnail} /> : <></>}
          <Title>{title}</Title>
        </Header>
        <Content>
          {canCreatePost ? <NewPost /> : <></>}
          <Posts>{posts.length > 0 ? postsElements : <EmptyPosts />}</Posts>
        </Content>
      </Wrapper>
    </FeedProvider>
  );
}
