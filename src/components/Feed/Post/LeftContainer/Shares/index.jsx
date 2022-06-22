import { useContext, useEffect, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';

import PostContext from './../../../../../hooks/PostContext';

function Shares() {
  const { sharesData, setSharesData } = useContext(PostContext);
  const [numberOfShares, setNumberOfShares] = useState(Number(sharesData.numberOfShares) ?? 0);

  useEffect(() => {
    if (sharesData.userHasShared) setNumberOfShares(numberOfShares + 1);
    else setNumberOfShares(Number(sharesData.numberOfShares) ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sharesData.userHasShared]);

  return (
    <div className='left-container__shares'>
      <IoRepeatSharp
        className={`left-container__shares__icon ${sharesData.userHasShared ? 'reshared' : ''}`}
        onClick={() => setSharesData({ ...sharesData, userHasShared: !sharesData.userHasShared })}
      />
      <p className='left-container__shares__label'>
        <span>{processSharesCount(numberOfShares)}</span>
        {sharesLabel(numberOfShares)}
      </p>
    </div>
  );

  function processSharesCount(count) {
    return count > 0 ? `${count}` : 'No reshares yet';
  }
  function sharesLabel(count) {
    return count > 0 ? ` reshare${count === 1 ? '' : 's'}` : '';
  }
}

export default Shares;
