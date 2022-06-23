import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FeedContext from '../../hooks/FeedContext';
import Feed from '../../components/Feed';

export default function UserPage() {
  const {
    hooks: {
      data: { reloadFeed },
    },
  } = useContext(FeedContext);
  const { userId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateUserPosts(), [userId]);

  async function updateUserPosts() {
    const route = `/users/${userId}`;
    const canCreatePost = false;
    const type = `user`;

    try {
      await reloadFeed({
        canCreatePost,
        route,
        type,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <Feed />;
}
