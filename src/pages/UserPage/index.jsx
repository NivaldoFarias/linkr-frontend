import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import DataContext from '../../hooks/DataContext';
import Axios from '../../blueprints';

export default function UserPage() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('timeline');
  const [picture, setPicture] = useState('');
  const [posts, setPosts] = useState([]);

  const { token } = useContext(DataContext);

  useEffect(() => {
    updateUserPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  function updateUserPosts() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = Axios.get(`/users/${userId}/posts`, config);
    promise.then(({ data }) => {
      setUserName(data.username);
      setPicture(data.imageUrl);
      setPosts(data.posts);
    });
    promise.catch((error) => console.log(error));
  }

  return (
    <Feed
      title={`${userName}'s posts`}
      posts={posts}
      canCreatePost={false}
      userThumbnail={picture}
      updatePostsFunction={updateUserPosts}
    />
  );
}
