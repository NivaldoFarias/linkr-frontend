import { useContext } from 'react';
import Axios from '../../../../blueprints';
import PostContext from '../../../../hooks/PostContex';

export default function EditPostText() {
  const {
    post,
    editText,
    setEditText,
    setIsEditingPost,
    handleError,
    editPostData,
    updatePostData,
  } = useContext(PostContext);

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
