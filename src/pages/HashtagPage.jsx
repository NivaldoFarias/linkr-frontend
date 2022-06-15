import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../adapters';
import Feed from '../components/Feed';

export default function HashtagPage() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const promise = Axios.get(`/hashtags/${hashtag}/posts`).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return <Feed title={`# ${hashtag}`} posts={posts} canCreatePost={true} />;
}
