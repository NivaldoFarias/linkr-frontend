import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import DataContext from '../../hooks/DataContext';
import FeedContext from '../../hooks/FeedContext';

import Feed from '../../components/Feed';
import Loading from '../../components/Loading';

export default function TimelinePage() {
  const [loading, setLoading] = useState(true);

  const { token } = useContext(DataContext);
  const { feed, setFeed } = useContext(FeedContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateTimeline(), []);

  async function updateTimeline() {
    try {
      await feed.updatePosts(token, '/timeline');
      setLoading(false);
      setFeed({ ...feed, canCreatePost: true, userThumbnail: false, title: 'Timeline' });
    } catch (error) {
      toast.error('An error occured while trying to fetch the posts, please refresh the page');
    }
  }

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      {loading ? <Loading /> : <Feed />}
    </>
  );
}
