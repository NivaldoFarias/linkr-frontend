import { createContext, useContext, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

import Axios from '../blueprints';
import DataContext from './DataContext';
import fallbackAvatar from '../assets/fallback-avatar.png';

const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feedData, setFeedData] = useState({ shares: [], posts: {}, users: {}, pageOwnerId: null });
  const users = feedData.users;
  const posts = feedData.posts;
  const shares = feedData.shares;
  const pageOwner = feedData.users[feedData.pageOwnerId] ?? {
    username: 'User',
    imageUrl: fallbackAvatar,
  };
  const { token } = useContext(DataContext);
  const navigate = useNavigate();

  const dates = {
    oldestShare:
      shares.length > 0 ? shares[shares.length - 1].createdAt : '1900-06-23T17:03:04.974Z',
    newestShare: shares.length > 0 ? shares[0].createdAt : '1900-06-23T17:03:04.974Z',
  };
  console.log(dates);

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const hooks = {
    data: {
      reloadFeed,
      refreshPost,
      updatePost,
      deletePost,
      toggleFollowUser,
      togglePostLike,
      togglePostShare,
      submitComment,
      submitPost,
    },
    navigate: {
      goToUserPage,
      goToHashtagPage,
    },
  };

  const [feedRepository, setFeedRepository] = useState({
    canCreatePost: true,
    route: '/timeline',
    type: 'timeline',
  });

  return (
    <FeedContext.Provider
      value={{
        shares,
        posts,
        users,
        pageOwner,
        hooks,
        feedRepository,
        setFeedRepository,
        handleError,
        setFeedData,
      }}
    >
      {children}
    </FeedContext.Provider>
  );

  async function deletePost(postId) {
    const url = `/posts/${postId}`;
    try {
      await Axios.delete(url, CONFIG);
      refreshPost();
    } catch (err) {
      handleError('Unable to delete post');
    }
  }

  async function toggleFollowUser(userId, isFollowing) {
    const url = `/users/${userId}/${isFollowing ? 'un' : ''}follow`;
    try {
      await Axios.post(url, {}, CONFIG);
      refreshUser(userId);
    } catch (err) {
      handleError('Unable to follow user');
    }
  }

  async function reloadFeed(newFeedRepository) {
    setFeedRepository({ ...newFeedRepository });
    await updateFeed(newFeedRepository);
  }

  async function togglePostLike(postId, userHasLiked) {
    const tryToLike = !userHasLiked;
    const url = `/posts/${postId}/${tryToLike ? '' : 'un'}like`;
    try {
      await Axios.post(url, {}, CONFIG);
      await refreshPost(postId);
    } catch (error) {
      handleError();
    }
  }

  async function togglePostShare(postId, userHasShared) {
    console.log(userHasShared);
    const url = `/posts/${postId}/${!userHasShared ? '' : 'un'}share`;
    try {
      await Axios.post(url, {}, CONFIG);
      await refreshPost(postId);
    } catch (error) {
      handleError();
    }
  }

  async function updateFeed(newFeedRepository) {
    const PATH = `${newFeedRepository.route}/posts`;

    try {
      const request = await Axios.get(PATH, CONFIG);
      setFeedData(
        request?.data.shares
          ? request.data
          : { shares: [], posts: {}, users: {}, pageOwnerId: null },
      );
    } catch (error) {
      handleError(error);
    }
  }

  async function refreshPost(postId) {
    const url = `/posts/${postId}`;
    try {
      const {
        data: { post, users: newUsers },
      } = await Axios.get(url, CONFIG);
      const object = {
        ...feedData,
        posts: { ...posts, [postId]: { ...post } },
        users: { ...users, ...newUsers },
      };
      setFeedData(object);
    } catch (error) {
      handleError(error);
    }
  }

  async function refreshUser(userId) {
    const url = `/users/${userId}`;
    try {
      const {
        data: { user },
      } = await Axios.get(url, CONFIG);
      const object = {
        ...feedData,
        users: { ...users, [userId]: { ...user } },
      };
      setFeedData(object);
    } catch (error) {
      handleError(error);
    }
  }

  async function submitComment(text, postId) {
    const url = `/posts/${postId}/comment`;
    try {
      await Axios.post(url, { text }, CONFIG);
      await refreshPost(postId);
    } catch (error) {
      handleError('Unable to submit comment');
    }
  }

  async function submitPost(postUrl, text) {
    const url = '/posts/';

    try {
      await Axios.post(url, { url: postUrl, text }, CONFIG);
      await pushFeed();
    } catch (error) {
      handleError('Unable to submit post');
    }
  }

  async function pushFeed() {
    const PATH = `${feedRepository.route}/posts?afterDate=${dates.newestShare}`;
    try {
      const {
        data: { shares: newShares, posts: newPosts, users: newUsers },
      } = await Axios.get(PATH, CONFIG);
      console.log(dates);
      const object = {
        ...feedData,
        shares: [...newShares, ...shares],
        posts: { ...posts, ...newPosts },
        users: { ...users, ...newUsers },
      };
      setFeedData(object);
    } catch (error) {
      handleError(error);
    }
  }

  async function unshiftFeed() {
    const PATH = `${feedRepository.route}/posts?beforeDate=${dates.oldestShare}`;
    try {
      const {
        data: { shares: newShares, posts: newPosts, users: newUsers },
      } = await Axios.get(PATH, CONFIG);
      console.log(dates);
      const object = {
        ...feedData,
        shares: [...shares, ...newShares],
        posts: { ...posts, ...newPosts },
        users: { ...users, ...newUsers },
      };
      setFeedData(object);
    } catch (error) {
      handleError(error);
    }
  }

  async function updatePost(postId, text) {
    const url = `/posts/${postId}`;
    try {
      await Axios.put(url, { text }, CONFIG);
    } catch (error) {
      handleError(error);
    }
  }

  function goToUserPage(userId) {
    navigate(`/user/${userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '').toLowerCase();
    navigate(`/hashtag/${cleanHashtag}`);
  }

  function handleError(error = { response: { data: { message: 'Something went wrong' } } }) {
    confirmAlert({
      message: `${error.response.data.message}. Please try again.`,
      buttons: [
        {
          label: 'OK',
          onClick: () => null,
        },
      ],
    });
  }
}

export default FeedContext;
