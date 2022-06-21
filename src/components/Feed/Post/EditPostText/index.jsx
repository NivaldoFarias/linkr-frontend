import { useContext } from 'react';
import Axios from '../../../../blueprints';
import PostContext from '../../../../hooks/PostContex';

export default function EditPostText() {
  const { post, editText, setEditText, CONFIG, handleError } = useContext(PostContext);

  return (
    <textarea
      className='post-header__edit'
      onChange={handleEditPostInputChange}
      value={editText}
    ></textarea>
  );

  async function editPostData() {
    const url = `/posts/${post.id}`;
    try {
      await Axios.put(url, { text: editText }, CONFIG);
    } catch (err) {
      handleError(err);
    }
  }

  function handleEditPostInputChange(e) {
    e.preventDefault();
    setEditText(e.target.value);
  }
}
