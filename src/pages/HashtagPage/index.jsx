import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../blueprints";
import Feed from "../../components/Feed";
import TokenContext from "../../hooks/TokenContext";

export default function HashtagPage() {

  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);

  const {token} = useContext(TokenContext);

  useEffect(() => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const promise = Axios.get(`/hashtags/${hashtag}/posts`, config);
    promise.then(({ data }) => {setPosts(data)})}
    , []);

  return (
    <Feed title={`# ${hashtag}`} posts={posts} canCreatePost={false} userThumbnail={false}/>
  );
}
