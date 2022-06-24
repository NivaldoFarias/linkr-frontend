import { useState, createContext, useContext } from 'react';
import FeedContext from './FeedContext.jsx';

const PostContext = createContext();

export function PostProvider(props) {
  const { share, children } = props;
  const {
    posts,
    hooks: {
      data: { updatePost },
    },
  } = useContext(FeedContext);
  const post = { ...posts[share.postId] };

  const [editText, setEditText] = useState(post?.text ?? '');
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

  const [isCommentSectionOpen, setOpenCommentSection] = useState(false);

  return (
    <PostContext.Provider
      value={{
        share,
        post,
        isCommentSectionOpen,
        setOpenCommentSection,
        editText,
        setEditText,
        modalIsOpen,
        setModalIsOpen,
        shareModalIsOpen,
        setShareModalIsOpen,
        isEditingPost,
        setIsEditingPost,
        savePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );

  async function savePost() {
    await updatePost(post.id, editText);
    setIsEditingPost(false);
  }
}

export default PostContext;
