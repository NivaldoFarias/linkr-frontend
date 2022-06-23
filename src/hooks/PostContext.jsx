import { useState, createContext, useContext } from 'react';
import FeedContext from './FeedContext.jsx';

const PostContext = createContext();

export function PostProvider(props) {
  const { share, children } = props;
  const { posts } = useContext(FeedContext);
  const post = { ...posts[share.postId] };

  const [editText, setEditText] = useState(post?.text ?? '');
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        isEditingPost,
        setIsEditingPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
