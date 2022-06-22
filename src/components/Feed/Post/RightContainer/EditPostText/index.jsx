import { useContext, useEffect } from 'react';
import PostContext from './../../../../../hooks/PostContext';

export default function EditPostText() {
  const {
    postData: { text },
    editText,
    setEditText,
    setIsEditingPost,
    handleError,
    editPostData,
    updatePostData,
  } = useContext(PostContext);

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
        await updatePostData();
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