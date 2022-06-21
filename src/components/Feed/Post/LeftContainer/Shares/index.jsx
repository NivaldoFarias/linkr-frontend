import { useContext, useEffect, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';
import PostContext from './../../../../../hooks/PostContext';

function Shares() {
  const [postData, setPostData] = useState({ id: 1, shares_count: 0 });
  const [click, setClick] = useState(false);
  const { sharesData, setSharesData } = useContext(PostContext);

  useEffect(() => {
    if (click) setSharesData({ ...sharesData, id: postData.id });
    else if (!click) setSharesData({ ...sharesData, id: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className='left-container__shares'>
      <IoRepeatSharp
        className={`left-container__shares__icon ${click ? 'reshared' : ''}`}
        onClick={toggleReshare}
      />
      <p className='left-container__shares__label'>
        <span>{processSharesCount(postData.shares_count)}</span>
        {sharesLabel(postData.shares_count)}
      </p>
    </div>
  );

  function toggleReshare() {
    setClick(!click);
  }

  function processSharesCount(count) {
    return count > 0 ? `${count}` : 'No reshares yet';
  }
  function sharesLabel(count) {
    return count > 0 ? ` reshare${count === 1 ? '' : 's'}` : '';
  }
}

export default Shares;
