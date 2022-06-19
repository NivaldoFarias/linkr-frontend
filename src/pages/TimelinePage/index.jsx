import { useContext, useEffect, useState } from 'react';
import Axios from '../../blueprints';
import Feed from '../../components/Feed';
import Loading from '../../components/Loading';
import DataContext from '../../hooks/DataContext';
import toast, { Toaster } from 'react-hot-toast';

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(DataContext);

  useEffect(() => {
    updateTimeline();
  }, []);

  function updateTimeline() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = Axios.get(`/timeline`, config);
    promise.then(({ data }) => {
      setPosts(data);
      setLoading(false);
    });
    promise.catch(function (error) {
      toast.error('An error occured while trying to fetch the posts, please refresh the page');
      console.log(error);
    });

    return;
  }
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      {loading ? (
        <Loading />
      ) : (
        <Feed
          title={`timeline`}
          posts={posts}
          canCreatePost={true}
          userThumbnail={false}
          updatePostsFunction={updateTimeline}
        />
      )}
    </>
  );
}
