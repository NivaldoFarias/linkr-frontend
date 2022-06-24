import { useContext, useEffect, useState } from 'react';
import DataContext from '../../hooks/DataContext';

import FeedContext from '../../hooks/FeedContext';
import getRandomInt from '../../utils/getRandomInt';
import StyledFollowButton from './styles';

function FollowButton() {
  const {
    user: { id: userId },
  } = useContext(DataContext);
  const {
    hooks: {
      data: { toggleFollowUser },
    },
    pageOwner: { id: pageOwnerId, isFollowing },
    feedRepository: { type },
  } = useContext(FeedContext);

  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const text = isFollowing ? (isHovering ? 'Unfollow' : 'Following') : 'Follow';

  return type === 'user' && pageOwnerId !== userId ? (
    <StyledFollowButton
      className={isFollowing ? 'clicked' : ''}
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          submitToggleFollowing();
        }, getRandomInt(750, 1500));
      }}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      {isLoading ? <div className='loading-dots' /> : `${text}`}
    </StyledFollowButton>
  ) : (
    <></>
  );

  async function submitToggleFollowing() {
    await toggleFollowUser(pageOwnerId, isFollowing);
    setIsLoading(false);
  }

  function handleHoverIn() {
    setIsHovering(true);
  }

  function handleHoverOut() {
    setIsHovering(false);
  }
}

export default FollowButton;
