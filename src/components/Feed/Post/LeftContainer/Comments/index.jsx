import { useContext, useEffect, useState } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import PostContext from '../../../../../hooks/PostContext';

function Comments() {
  const { post, commentsData, setCommentsData, isCommentSectionOpen, setOpenCommentSection } =
    useContext(PostContext);

  const [postData, setPostData] = useState({ id: post?.id || 0, comments_count: 0 });

  useEffect(() => {
    if (isCommentSectionOpen) setCommentsData({ ...commentsData, id: postData.id });
    else if (!isCommentSectionOpen) setCommentsData({ ...commentsData, id: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCommentSectionOpen]);

  return (
    <div className='left-container__comments'>
      <GoCommentDiscussion
        className={`left-container__comments__icon ${isCommentSectionOpen ? 'toggled' : ''}`}
        onClick={toggleCommentSection}
      />
      <p className='left-container__comments__label'>
        <span>{commentsCount(postData.comments_count)}</span>
        {commentsLabel(postData.comments_count)}
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
