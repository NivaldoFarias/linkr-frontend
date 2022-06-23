import { useContext, useEffect, useState } from 'react';
import DataContext from '../../hooks/DataContext';

import FeedContext from '../../hooks/FeedContext';
import getRandomInt from '../../utils/getRandomInt';
import StyledFollowButton from './styles';

function FollowButton() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Follow');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setText(clicked ? `${isHovering ? 'Unfollow' : 'Following'}` : 'Follow');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, isHovering]);

  return type === 'user' && pageOwnerId !== userId ? (
    <StyledFollowButton
      className={clicked ? 'clicked' : ''}
      onClick={() => {
        setIsLoading(true);
        setClicked(!clicked);
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
    try {
      await toggleFollowUser(pageOwnerId, isFollowing);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  function handleHoverIn() {
    setIsHovering(true);
  }

  function handleHoverOut() {
    setIsHovering(false);
  }
}

export default FollowButton;
