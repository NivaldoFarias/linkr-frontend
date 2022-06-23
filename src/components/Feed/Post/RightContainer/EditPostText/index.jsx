import { useContext, useEffect } from 'react';
import FeedContext from '../../../../../hooks/FeedContext';
import PostContext from './../../../../../hooks/PostContext';

export default function EditPostText() {
  const {
    post: { text },
    editText,
    setEditText,
    setIsEditingPost,
    editPostData,
  } = useContext(PostContext);
  const {
    handleError,
    hooks: {
      data: { updatePost },
    },
  } = useContext(FeedContext);

  useEffect(() => {
    setEditText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <textarea
      className='post-header__edit'
      onChange={handleChange}
      onKeyDownCapture={handleEditPostInputKeyDown}
      value={editText}
    ></textarea>
  );

  async function handleEditPostInputKeyDown(e) {
    if (e.key === 'Enter') {
      try {
        await editPostData();
        await updatePost();
        setIsEditingPost(false);
      } catch (error) {
        handleError(error);
      }
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setEditText(e.target.value);
  }
}
