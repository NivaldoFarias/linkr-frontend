import { useContext, useEffect, useState } from 'react';
import { IoRepeatSharp } from 'react-icons/io5';
import DataContext from '../../../../../hooks/DataContext';
import PostContext from './../../../../../hooks/PostContext';

function Shares() {
  const [click, setClick] = useState(false);

  const { user } = useContext(DataContext);
  const { sharesData, setSharesData } = useContext(PostContext);

  useEffect(() => {
    if (click && !sharesData.includes(user.id)) {
      setSharesData([...sharesData, user.id]);
    } else setSharesData(sharesData.filter((id) => id !== user.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className='left-container__shares'>
      <IoRepeatSharp
        className={`left-container__shares__icon ${click ? 'reshared' : ''}`}
        onClick={toggleReshare}
      />
      <p className='left-container__shares__label'>
        <span>{processSharesCount(sharesData.length)}</span>
        {sharesLabel(sharesData.length)}
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
