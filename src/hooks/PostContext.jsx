import { useState, createContext, useContext, useRef } from 'react';
import { DataContext } from './DataContext.jsx';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Axios from '../blueprints';

const PostContext = createContext();

export function PostProvider(props) {
  const { post, children } = props;
  const [postData, setPostData] = useState(post ?? {});

  const { token } = useContext(DataContext);
  const CONFIG = { headers: { Authorization: `Bearer ${token}` } };

  const [editText, setEditText] = useState(postData?.text ?? '');
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [sharesData, setSharesData] = useState(postData?.shares ?? {});
  const [commentsData, setCommentsData] = useState(postData?.comments ?? []);
  const [isCommentSectionOpen, setOpenCommentSection] = useState(false);

  const navigate = useNavigate();

  return (
    <PostContext.Provider
      value={{
        CONFIG,
        postData,
        commentsData,
        setCommentsData,
        isCommentSectionOpen,
        setOpenCommentSection,
        sharesData,
        setSharesData,
        editText,
        setEditText,
        modalIsOpen,
        setModalIsOpen,
        updatePostData,
        editPostData,
        isEditingPost,
        setIsEditingPost,
        goToUserPage,
        goToHashtagPage,
        handleError,
      }}
    >
      {children}
    </PostContext.Provider>
  );

  async function updatePostData() {
    const url = `/posts/${postData.id}`;
    try {
      const { data } = await Axios.get(url, CONFIG);
      setPostData(data);
    } catch (err) {
      handleError(err);
    }
  }

  async function editPostData() {
    const url = `/posts/${postData.id}`;
    try {
      await Axios.put(url, { text: editText }, CONFIG);
    } catch (err) {
      handleError(err);
    }
  }

  function goToUserPage(userId) {
    navigate(`/user/${userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '').toLowerCase();
    navigate(`/hashtag/${cleanHashtag}`);
  }

  function handleError(error = { response: { data: { message: 'Something went wrong' } } }) {
    confirmAlert({
      message: `${error.response.data.message}. Please try again.`,
      buttons: [
        {
          label: 'OK',
          onClick: () => null,
        },
      ],
    });
  }
}

export default PostContext;
