import { useContext, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';
import FeedContext from '../../../../../hooks/FeedContext';

import PostContext from './../../../../../hooks/PostContext';

function Shares() {
  const {
    post: {
      id: postId,
      shares: { userHasShared, numberOfShares },
    },
  } = useContext(PostContext);
  const {
    hooks: {
      data: { togglePostShare },
    },
  } = useContext(FeedContext);

  const [click, setClick] = useState(userHasShared ?? false);

  return (
    <div className='left-container__shares'>
      <IoRepeatSharp
        className={`left-container__shares__icon ${userHasShared ? 'reshared' : ''}`}
        onClick={handleClick}
      />
      <p className='left-container__shares__label'>
        <span>{processSharesCount(numberOfShares)}</span>
        {sharesLabel(numberOfShares)}
      </p>
    </div>
  );

  async function handleClick() {
    setClick(!click);

    try {
      await togglePostShare(postId, userHasShared);
    } catch (err) {
      setClick(!click);
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
