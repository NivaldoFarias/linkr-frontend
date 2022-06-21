import { useState, useEffect, createContext, useContext } from 'react';
import { DataContext } from './DataContext.jsx';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Axios from '../blueprints';

const PostContext = createContext();

export function PostProvider(props) {
  const { token } = useContext(DataContext);
  const CONFIG = { headers: { Authorization: `Bearer ${token}` } };

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [editText, setEditText] = useState(props.post.text);

  const [isEditingPost, setIsEditingPost] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('use effect');
    setPost(props.post);
    setIsLiked(props.post.userHasLiked);
    setEditText(props.post.text);
  }, [props.post]);

  return (
    <PostContext.Provider
      value={{
        CONFIG,
        post,
        setPost,
        isLiked,
        setIsLiked,
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
      {props.children}
    </PostContext.Provider>
  );

  async function updatePostData() {
    const url = `/posts/${post.id}`;
    try {
      const { data } = await Axios.get(url, CONFIG);
      setPost(data);
      setIsLiked(data.userHasLiked);
      setEditText(data.text);
    } catch (err) {
      handleError(err);
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

  function goToUserPage(userId) {
    navigate(`/user/${post.userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '').toLowerCase();
    console.log('go to ', cleanHashtag);
    navigate(`/hashtag/${cleanHashtag}`);
  }

  function handleError(error) {
    confirmAlert({
      message: `${
        error.response?.data.message ?? `${error ? error : ' Something went wrong'}`
      }. Please try again.`,
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
