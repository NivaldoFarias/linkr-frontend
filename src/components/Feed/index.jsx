import { useCallback, useContext, useEffect, useState } from 'react';

import FeedContext from '../../hooks/FeedContext';
import { MainPageContext } from '../../hooks/MainPageContext';
import { PostProvider } from '../../hooks/PostContext';

import { Wrapper, Header, Title, UserThumbnail, Content, Posts, EndMessage } from './styles/';
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
      data: { updateUserFollowData, unshiftFeed },
    },
    checkShares,
    followData,
  } = useContext(FeedContext);
  const { loadHashtags } = useContext(MainPageContext);

  const hasUnloadedNewPosts = checkShares.afterNewest.shares > 0;
  const hasUnloadedOldPosts = checkShares.beforeOldest.shares > 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    loadHashtags();
  }, [shares]);

  const postsElements = shares.map((share) => {
    return (
      <PostProvider key={share.id} share={share}>
        {share.hide ? <></> : <Post />}
      </PostProvider>
    );
  });

  const emptyMessage =
    type === 'timeline'
      ? Number(followData.numberOfFollowings) === 0
        ? "You don't follow anyone yet. Search for new friends!"
        : 'No posts found from your friends'
      : `There are no posts yet`;

  const handleScroll = async (e) => {
    e.preventDefault();
    const isBottom =
      Math.abs(e.target.clientHeight - e.target.scrollHeight + e.target.scrollTop) <= 5;
    if (isBottom) {
      await unshiftFeed();
    }
  };

  const endMessage = (
    <EndMessage>{hasUnloadedOldPosts ? 'Loading more posts...' : 'End of line'}</EndMessage>
  );

  return (
    <Wrapper onScroll={handleScroll}>
      <Header>
        {type === 'user' ? <UserThumbnail src={pageOwner.imageUrl} /> : <></>}
        <Title>{title()}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        {hasUnloadedNewPosts ? <LoadNewButton /> : <></>}
        {shares.length > 0 ? (
          <>
            <Posts>{postsElements}</Posts>
            {endMessage}
          </>
        ) : (
          <EmptyPosts message={emptyMessage} />
        )}
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
