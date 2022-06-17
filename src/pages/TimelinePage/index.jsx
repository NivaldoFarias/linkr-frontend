<<<<<<< HEAD
import TimelinePosts from '../../components/TimelinePosts';
=======
import { useEffect, useState } from 'react';
import Axios from '../../adapters';
import Feed from "../../components/Feed";
>>>>>>> main

export default function TimelinePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const promise = Axios.get(`/timeline`);
      promise.then(({ data }) => {setPosts(data)})}
      , []);

  return (
    <Feed title={`timeline`} posts={posts} canCreatePost={true} userThumbnail={false}/>
  );
}
