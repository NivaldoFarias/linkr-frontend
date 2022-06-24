import { useCallback, useContext, useEffect, useState } from 'react';

import FeedContext from '../../hooks/FeedContext';
import { MainPageContext } from '../../hooks/MainPageContext';
import { PostProvider } from '../../hooks/PostContext';

import { Wrapper, Header, Title, UserThumbnail, Content, Posts } from './styles/';
import EmptyPosts from './EmptyPosts/';
import NewPost from './NewPost/';
import Post from './Post/';
import { LoadNewButton } from './LoadNewButton';

export default function Feed({ hashtag }) {
  const {
    pageOwner,
    shares,
    feedRepository: { type, canCreatePost },
    hooks: {
      data: { getUserFollowData },
    },
    checkShares,
    hooks,
  } = useContext(FeedContext);
  const { loadHashtags } = useContext(MainPageContext);

  const [followData, setFollowData] = useState({ numberOfFollowings: 0 });
  const hasUnloadedPosts = checkShares.afterNewest.shares > 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    // loadHashtags(); [shares]
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    getUserFollowData(user.id).then((data) => {
      setFollowData(data);
    });
  }, [getUserFollowData]);

  const postsElements = shares.map((share) => {
    return (
      <PostProvider key={share.id} share={share}>
        <Post />
      </PostProvider>
    );
  });

  const emptyPostsMessage = () => {
    const message =
      type === 'timeline'
        ? Number(followData.numberOfFollowings) === 0
          ? "You don't follow anyone yet. Search for new friends!"
          : 'No posts found from your friends'
        : `There are no posts yet`;
    return message;
  };

  const handleScroll = async (e) => {
    e.preventDefault();
    const isBottom =
      Math.abs(e.target.clientHeight - e.target.scrollHeight + e.target.scrollTop) <= 5;
    if (isBottom) {
      await hooks.data.unshiftFeed();
    }
  };

  return (
    <Wrapper onScroll={handleScroll}>
      <Header>
        {type === 'user' ? <UserThumbnail src={pageOwner.imageUrl} /> : <></>}
        <Title>{title()}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        {hasUnloadedPosts ? <LoadNewButton /> : <></>}
        <Posts>
          {shares.length > 0 ? postsElements : <EmptyPosts message={emptyPostsMessage()} />}
        </Posts>
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
