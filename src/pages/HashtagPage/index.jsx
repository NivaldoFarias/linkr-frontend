import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Feed from '../../components/Feed';
import DataContext from '../../hooks/DataContext';
import FeedContext from '../../hooks/FeedContext';

export default function HashtagPage() {
  const hashtag = useParams().hashtag.toLowerCase();
  const { feedRepository, setFeedRepository } = useContext(FeedContext);
  const { token } = useContext(DataContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateHashtagPosts(), [hashtag]);

  async function updateHashtagPosts() {
    const route = `/hashtags/${hashtag}`;
    const title = `#${hashtag}`;
    try {
      await feedRepository.updatePosts(token, route);
      setFeedRepository({
        ...feedRepository,
        canCreatePost: false,
        userThumbnail: false,
        title: title,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <Feed />;
}
