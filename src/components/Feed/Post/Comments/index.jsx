import { useContext, useState } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import DataContext from '../../../../hooks/DataContext';

function Comments() {
  const [postData, setPostData] = useState({ id: 1, comments_count: 0 });
  const [click, setClick] = useState(false);
  const { commentSection, setCommentSection } = useContext(DataContext);

  return (
    <div className='left-container__comments'>
      <GoCommentDiscussion
        className={`left-container__comments__icon ${click ? 'toggled' : ''}`}
        onClick={toggleCommentSection}
      />
      <p className='left-container__comments__label'>
        <span>{postData.comments_count}</span> comments
      </p>
    </div>
  );

  function toggleCommentSection() {
    setClick(!click);
    if (click) setCommentSection({ ...commentSection, id: postData.id });
    else if (!click) setCommentSection({ ...commentSection, id: null });
  }
}

export default Comments;
