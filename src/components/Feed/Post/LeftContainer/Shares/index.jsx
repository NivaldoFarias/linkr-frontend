import { useContext, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';
import DataContext from '../../../../../hooks/DataContext';
import FeedContext from '../../../../../hooks/FeedContext';

import PostContext from './../../../../../hooks/PostContext';
import ShareModal from './ShareModal';

function Shares() {
  const {
    user: { id: userId },
  } = useContext(DataContext);
  const {
    post: {
      shares: { userHasShared, numberOfShares },
      userId: postUserId,
    },
    setShareModalIsOpen,
  } = useContext(PostContext);

  const userCanShare = postUserId !== userId;

  return (
    <div className='left-container__shares'>
      <ShareModal />
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
      setShareModalIsOpen(true);
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
