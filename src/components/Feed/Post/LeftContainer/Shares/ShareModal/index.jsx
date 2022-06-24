import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { StyledLoadingDots } from '../../../../../../styles';
import PostContext from '../../../../../../hooks/PostContext';
import FeedContext from '../../../../../../hooks/FeedContext';

export default function ShareModal() {
  const {
    post: {
      id: postId,
      shares: { userHasShared },
    },
    shareModalIsOpen,
    setShareModalIsOpen,
  } = useContext(PostContext);
  const {
    hooks: {
      data: { togglePostShare },
    },
  } = useContext(FeedContext);

  const [hasSubmited, setHasSubmited] = useState(false);

  const question = userHasShared
    ? 'Do you want to undo this repost?'
    : 'Are you sure you want to repost this post?';
  const callToAction = userHasShared ? 'Yes, undo repost!' : 'Yes, repost it!';

  return (
    <div className='delete-post'>
      <Modal
        className='modal'
        portalClassName='modal-portal'
        overlayClassName='overlay'
        isOpen={shareModalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <IoCloseSharp className='close-modal-btn' onClick={closeModal} />
        <div className='modal-container'>
          <h2>{question}</h2>
          <div>
            <button onClick={closeModal} className='return-btn'>
              Return
            </button>
            <button onClick={handleSubmit} className='delete-btn'>
              {hasSubmited ? <StyledLoadingDots /> : callToAction}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );

  async function handleSubmit() {
    setHasSubmited(true);
    try {
      await togglePostShare(postId);
      closeModal();
    } catch (err) {
      setHasSubmited(false);
      closeModal();
    }
  }

  function closeModal() {
    setHasSubmited(false);
    setShareModalIsOpen(false);
  }
}
