import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import FeedContext from '../../hooks/FeedContext';

import Feed from '../../components/Feed';
import Loading from '../../components/Loading';

export default function TimelinePage() {
  const [loading, setLoading] = useState(true);

  const {
    hooks: {
      data: { reloadFeed },
    },
  } = useContext(FeedContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateTimeline(), []);

  async function updateTimeline() {
    try {
      await reloadFeed({
        canCreatePost: true,
        route: '/timeline',
        type: 'timeline',
      });
      setLoading(false);
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
