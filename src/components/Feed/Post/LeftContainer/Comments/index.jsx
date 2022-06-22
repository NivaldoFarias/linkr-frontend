import { useContext, useEffect } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import PostContext from '../../../../../hooks/PostContext';

function Comments() {
  const { commentsData, isCommentSectionOpen, setOpenCommentSection, scrollToRef } =
    useContext(PostContext);

  useEffect(() => {
    if (isCommentSectionOpen) scrollToRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCommentSectionOpen]);

  return (
    <div className='left-container__comments'>
      <GoCommentDiscussion
        className={`left-container__comments__icon ${isCommentSectionOpen ? 'toggled' : ''}`}
        onClick={toggleCommentSection}
      />
      <p className='left-container__comments__label'>
        <span>{commentsCount(commentsData.length)}</span>
        {commentsLabel(commentsData.length)}
      </p>
    </div>
  );

  function toggleCommentSection() {
    setOpenCommentSection(!isCommentSectionOpen);
  }

  function commentsCount(count) {
    return count > 0 ? `${count}` : 'No comments yet';
  }
  function commentsLabel(count) {
    return count > 0 ? ` comment${count === 1 ? '' : 's'}` : '';
  }
}

export default Comments;
