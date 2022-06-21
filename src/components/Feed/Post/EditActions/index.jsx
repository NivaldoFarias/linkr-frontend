import { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Axios from '../../../../blueprints';
import PostContext from '../../../../hooks/PostContex';

export default function EditActions() {
  const {
    post,
    editText,
    updatePostData,
    isEditingPost,
    setIsEditingPost,
    setModalIsOpen,
    CONFIG,
    handleError,
  } = useContext(PostContext);

  return (
    <div className='actions-container'>
      <AiFillEdit onClick={handleEditPostButtonClicked} />
      <AiFillDelete onClick={openModal} />
    </div>
  );

  async function handleEditPostButtonClicked() {
    if (isEditingPost) {
      try {
        await editPostData();
        await updatePostData();
        setIsEditingPost(false);
      } catch (error) {
        handleError(error);
      }
    } else {
      setIsEditingPost(true);
    }
  }

  async function editPostData() {
    const url = `/posts/${post.id}`;
    try {
      await Axios.put(url, { text: editText }, CONFIG);
    } catch (err) {
      handleError(err);
    }
  }

  function openModal() {
    setModalIsOpen(true);
  }
}
