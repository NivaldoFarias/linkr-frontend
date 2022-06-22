import { useContext, useEffect } from 'react';

import FeedContext from '../../hooks/FeedContext';
import { MainPageContext } from '../../hooks/MainPageContext';
import { PostProvider } from '../../hooks/PostContext';

import { Wrapper, Header, Title, UserThumbnail, Content, Posts } from './styles/';
import EmptyPosts from './EmptyPosts/';
import NewPost from './NewPost/';
import Post from './Post/';

export default function Feed() {
  const {
    feedData,
    feed: { title, canCreatePost, userThumbnail },
  } = useContext(FeedContext);
  const { loadHashtags } = useContext(MainPageContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadHashtags(), [feedData]);

  const postsKeys = Object.keys(feedData?.posts ?? {});
  const postsElements = postsKeys.map((key, index) => {
    return (
      <PostProvider key={index} post={feedData.posts[key]}>
        <Post />
      </PostProvider>
    );
  });
  return (
    <Wrapper>
      <Header>
        {userThumbnail ? <UserThumbnail src={userThumbnail} /> : <></>}
        <Title>{title}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        <Posts>{postsKeys.length > 0 ? postsElements : <EmptyPosts />}</Posts>
      </Content>
    </Wrapper>
  );
}
