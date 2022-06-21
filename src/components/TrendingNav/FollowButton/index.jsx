import { useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import DataContext from '../../../hooks/DataContext';
import getRandomInt from '../../../utils/getRandomInt';
import StyledFollowButton from './styles';

function FollowButton() {
  const { user } = useContext(DataContext);
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Follow');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setText(clicked ? `${isHovering ? 'Unfollow' : 'Following'}` : 'Follow');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, isHovering]);

  return (
    <StyledFollowButton
      className={clicked ? 'clicked' : ''}
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          toggleFollowUser();
        }, getRandomInt(750, 2000));
      }}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      {isLoading ? <div className='loading-dots' /> : `${text}`}
    </StyledFollowButton>
  );

  function toggleFollowUser() {
    setIsLoading(false);
    setClicked(!clicked);
    handleError('Need content');
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
