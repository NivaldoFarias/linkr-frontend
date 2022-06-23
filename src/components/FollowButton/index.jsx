import { useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
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
        }, getRandomInt(750, 2000));
      }}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      {isLoading ? <div className='loading-dots' /> : `${text}`}
    </StyledFollowButton>
  ) : (
    <></>
  );

  function submitToggleFollowing() {
    try {
      toggleFollowUser(pageOwnerId, isFollowing);
    } catch (err) {
      setIsLoading(false);
    }
  }

  function handleHoverIn() {
    setIsHovering(true);
  }

  function handleHoverOut() {
    setIsHovering(false);
  }

  function handleError(error) {
    confirmAlert({
      message: `${
        error.response?.data.message ?? `${error ? error : ' Something went wrong'}`
      }. Please try again.`,
      buttons: [
        {
          label: 'OK',
          onClick: () => null,
        },
      ],
    });
  }
}

export default FollowButton;
