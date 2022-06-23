import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../hooks/DataContext';
import FeedContext from '../../hooks/FeedContext';

import Feed from '../../components/Feed';

export default function UserPage() {
  const { feedRepository, setFeedRepository } = useContext(FeedContext);
  const { token } = useContext(DataContext);
  const { userId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateUserPosts(), []);

  async function updateUserPosts() {
    const route = `/users/${userId}`;

    try {
      const request = await feedRepository.updatePosts(token, route);
      setFeedRepository({
        ...feedRepository,
        canCreatePost: false,
        userThumbnail: request?.imageUrl ?? '',
        title: `${request?.username ?? 'user'}'s posts`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <Feed />;
}
