import { useState } from 'react';
import Feed from '../components/Feed';

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);

  return <Feed title={`timeline`} posts={posts} canCreatePost={true} />;
}
