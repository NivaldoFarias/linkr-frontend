import { useState } from 'react';
import Feed from '../components/Feed';
import { mockPosts }from './mock.js'

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);
  

  return <Feed title={`timeline`} posts={mockPosts} canCreatePost={true} />;
}
