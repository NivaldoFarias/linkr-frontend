import { useContext, useEffect } from 'react';

import FeedContext from '../../hooks/FeedContext';
import { MainPageContext } from '../../hooks/MainPageContext';
import { PostProvider } from '../../hooks/PostContext';

import { Wrapper, Header, Title, UserThumbnail, Content, Posts } from './styles/';
import EmptyPosts from './EmptyPosts/';
import NewPost from './NewPost/';
import Post from './Post/';

export default function Feed({ hashtag }) {
  const {
    pageOwner,
    shares,
    feedRepository: { type, canCreatePost },
  } = useContext(FeedContext);
  const { loadHashtags } = useContext(MainPageContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadHashtags(), [shares]);

  const postsElements = shares.map((share) => {
    return (
      <PostProvider key={share.id} share={share}>
        <Post />
      </PostProvider>
    );
  });
  return (
    <Wrapper>
      <Header>
        {type === 'user' ? <UserThumbnail src={pageOwner.imageUrl} /> : <></>}
        <Title>{title()}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        <Posts>{shares.length > 0 ? postsElements : <EmptyPosts />}</Posts>
      </Content>
    </Wrapper>
  );

  function title() {
    switch (type) {
      case 'user':
        return `${pageOwner.username ?? 'User'}'s posts`;
      case 'hashtag':
        return `#${hashtag}`;
      default:
        return 'timeline';
    }
  }
}
