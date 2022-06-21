import { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import PostContext from './../../../../../hooks/PostContext';

export default function EditActions() {
  const {
    updatePostData,
    isEditingPost,
    setIsEditingPost,
    setModalIsOpen,
    handleError,
    editPostData,
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

  function openModal() {
    setModalIsOpen(true);
  }
}
