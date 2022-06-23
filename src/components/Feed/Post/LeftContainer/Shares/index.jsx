import { useContext, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';
import DataContext from '../../../../../hooks/DataContext';
import FeedContext from '../../../../../hooks/FeedContext';

import PostContext from './../../../../../hooks/PostContext';

function Shares() {
  const {
    user: { id: userId },
  } = useContext(DataContext);
  const {
    post: {
      id: postId,
      shares: { userHasShared, numberOfShares },
      userId: postUserId,
    },
  } = useContext(PostContext);
  const {
    hooks: {
      data: { togglePostShare },
    },
  } = useContext(FeedContext);

  const userCanShare = postUserId !== userId;
  console.log(userCanShare);

  const [click, setClick] = useState(userHasShared ?? false);

  return (
    <div className='left-container__shares'>
      <IoRepeatSharp
        className={`left-container__shares__icon ${
          userCanShare && userHasShared ? 'reshared' : ''
        }`}
        onClick={handleClick}
      />
      <p className='left-container__shares__label'>
        <span>{processSharesCount(numberOfShares)}</span>
        {sharesLabel(numberOfShares)}
      </p>
    </div>
  );

  async function handleClick() {
    if (userCanShare) {
      setClick(!click);
      try {
        await togglePostShare(postId, userHasShared);
      } catch (err) {
        setClick(!click);
      }
    }
  }

  function processSharesCount(count) {
    return count > 0 ? `${count}` : 'No reshares yet';
  }
  function sharesLabel(count) {
    return count > 0 ? ` reshare${count === 1 ? '' : 's'}` : '';
  }
}

export default Shares;
