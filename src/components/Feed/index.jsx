import { useContext, useEffect, useState } from 'react';

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
      data: { getUserFollowData }
    },
    checkShares,
  } = useContext(FeedContext);
  const { loadHashtags } = useContext(MainPageContext);

  const [followData, setFollowData] = useState({ numberOfFollowings: 0 });
  const hasUnloadedPosts = checkShares.afterNewest.shares > 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadHashtags(), [shares]);

  const postsElements = shares.map((share) => {
    return (
      <PostProvider key={share.id} share={share}>
        <Post />
      </PostProvider>
    );
  });

  useEffect(() => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    getUserFollowData(user.id).then((data) => {
      setFollowData(data);
    }
    );
  }, [getUserFollowData]);

  const emptyPostsMessage = () => {
    const message = (
      type === 'timeline' ?
      Number(followData.numberOfFollowings) === 0 ?
          "You don't follow anyone yet. Search for new friends!" :
          "No posts found from your friends"
        :
        `There are no posts yet`
    );
    return message;
  }

  return (
    <Wrapper>
      <Header>
        {type === 'user' ? <UserThumbnail src={pageOwner.imageUrl} /> : <></>}
        <Title>{title()}</Title>
      </Header>
      <Content>
        {canCreatePost ? <NewPost /> : <></>}
        {hasUnloadedPosts ? <LoadNewButton /> : <></>}
        <Posts>{shares.length > 0 ? postsElements : <EmptyPosts message={emptyPostsMessage()} />}</Posts>
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
