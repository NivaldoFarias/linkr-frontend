import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FeedContext from '../../hooks/FeedContext';
import Feed from '../../components/Feed';

export default function HashtagPage() {
  const hashtag = useParams().hashtag.toLowerCase();
  const {
    hooks: {
      data: { reloadFeed },
    },
  } = useContext(FeedContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateHashtagPosts(), [hashtag]);

  async function updateHashtagPosts() {
    try {
      await reloadFeed({
        canCreatePost: false,
        route: `/hashtags/${hashtag}`,
        type: 'hashtag',
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <Feed hashtag={hashtag} />;
}
