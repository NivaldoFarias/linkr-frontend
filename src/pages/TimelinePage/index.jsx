import { useContext, useEffect, useState } from 'react';
import Axios from '../../blueprints';
import Feed from "../../components/Feed";
import TokenContext from '../../hooks/TokenContext';

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(TokenContext);


  useEffect(() => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const promise = Axios.get(`/timeline`, config);
    promise.then(({ data }) => {setPosts(data)})}
    , []);

  return <Feed title={`timeline`} posts={posts} canCreatePost={true} userThumbnail={false} />;
}
