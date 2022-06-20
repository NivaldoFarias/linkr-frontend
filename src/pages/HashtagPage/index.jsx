import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../blueprints';
import Feed from '../../components/Feed';
import DataContext from '../../hooks/DataContext';

export default function HashtagPage() {
  const [posts, setPosts] = useState([]);
  const hashtag = useParams().hashtag.toLowerCase();

  const { token } = useContext(DataContext);

  useEffect(() => {
    updateHashtagPosts();
  }, [hashtag]);

  function updateHashtagPosts() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = Axios.get(`/hashtags/${hashtag}/posts`, config);
    promise.then(({ data }) => {
      setPosts(data);
    });
  }

  return (
    <Feed
      title={`#${hashtag}`}
      posts={posts}
      canCreatePost={false}
      userThumbnail={false}
      updatePostsFunction={updateHashtagPosts}
    />
  );
}
