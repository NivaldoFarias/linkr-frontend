import { useContext, useEffect, useState } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import PostContext from '../../../../../hooks/PostContext';

function Comments() {
  const [click, setClick] = useState(false);
  const { post, commentsData, setCommentsData } = useContext(PostContext);
  const [postData, setPostData] = useState({ id: post?.id || 0, comments_count: 0 });

  useEffect(() => {
    if (click) setCommentsData({ ...commentsData, id: postData.id });
    else if (!click) setCommentsData({ ...commentsData, id: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className='left-container__comments'>
      <GoCommentDiscussion
        className={`left-container__comments__icon ${click ? 'toggled' : ''}`}
        onClick={toggleCommentSection}
      />
      <p className='left-container__comments__label'>
        <span>{commentsCount(postData.comments_count)}</span>
        {commentsLabel(postData.comments_count)}
      </p>
    </div>
  );

  function toggleCommentSection() {
    setClick(!click);
  }

  function commentsCount(count) {
    return count > 0 ? `${count}` : 'No comments yet';
  }
  function commentsLabel(count) {
    return count > 0 ? ` comment${count === 1 ? '' : 's'}` : '';
  }
}

export default Comments;
