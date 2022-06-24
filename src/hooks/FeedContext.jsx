import { createContext, useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import useInterval from 'use-interval';

import Axios from '../blueprints';
import DataContext from './DataContext';
import fallbackAvatar from '../assets/fallback-avatar.png';

const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feedData, setFeedData] = useState({ shares: [], posts: {}, users: {}, pageOwnerId: null });
  const [feedRepository, setFeedRepository] = useState({
    canCreatePost: true,
    route: '/timeline',
    type: 'timeline',
  });
  const [checkShares, setCheckShares] = useState({
    beforeOldest: { date: '1900-06-23T17:03:04.974Z', shares: 0 },
    afterNewest: { date: '1900-06-23T17:03:04.974Z', shares: 0 },
  });
  const [followData, setFollowData] = useState({ numberOfFollowings: 0, numberOfFollowers: 0 });

  const users = feedData.users;
  const posts = feedData.posts;
  const shares = feedData.shares;
  const pageOwner = feedData.users[feedData.pageOwnerId] ?? {
    username: 'User',
    imageUrl: fallbackAvatar,
    isFollowing: false,
  };

  const { token, user } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      updateUserFollowData();
    }
  }, [user]);

  const dates = {
    oldestShare:
      shares.length > 0 ? shares[shares.length - 1].createdAt : '1900-06-23T17:03:04.974Z',
    newestShare: shares.length > 0 ? shares[0].createdAt : '1900-06-23T17:03:04.974Z',
  };

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const hooks = {
    data: {
      reloadFeed,
      pushFeed,
      unshiftFeed,
      refreshPost,
      updatePost,
      deletePost,
      toggleFollowUser,
      togglePostLike,
      togglePostShare,
      submitComment,
      submitPost,
      getUserFollowData,
    },
    navigate: {
      goToUserPage,
      goToHashtagPage,
    },
  };

  useInterval(() => {
    updateCheckShares();
  }, 15000);

  return (
    <FeedContext.Provider
      value={{
        shares,
        posts,
        users,
        pageOwner,
        checkShares,
        hooks,
        feedRepository,
        setFeedRepository,
        handleError,
        setFeedData,
        followData,
      }}
    >
      {children}
    </FeedContext.Provider>
  );

  async function updateUserFollowData() {
    const { data } = await Axios.get(`/users/${user.id}/follow-data`, CONFIG);
    setFollowData(data);
  }
  async function getUserFollowData(userId) {
    const { data } = await Axios.get(`/users/${userId}/follow-data`, CONFIG);
    return data;
  }

  async function updateCheckShares() {
    const PATH = `${feedRepository.route}/posts/check?beforeDate=${dates.oldestShare}&afterDate=${dates.newestShare}`;
    const { data } = await Axios.get(PATH, CONFIG);
    const { beforeDate, postsBeforeDate, afterDate, postsAfterDate } = data;
    const objects = {
      beforeOldest: { date: beforeDate, shares: postsBeforeDate },
      afterNewest: { date: afterDate, shares: postsAfterDate },
    };
    setCheckShares(objects);
  }

  async function deletePost(postId) {
    const url = `/posts/${postId}`;
    try {
      await Axios.delete(url, CONFIG);
      removePostViews(postId);
    } catch (err) {
      handleError('Unable to delete post');
    }
  }

  async function toggleFollowUser(userId, isFollowing) {
    const url = `/users/${userId}/${isFollowing ? 'un' : ''}follow`;
    try {
      await Axios.post(url, {}, CONFIG);
      await refreshUser(userId);
      await updateUserFollowData();
    } catch (err) {
      handleError('Unable to follow user');
    }
  }

  async function reloadFeed(newFeedRepository) {
    setFeedRepository({ ...newFeedRepository });
    await updateFeed(newFeedRepository);
  }

  async function reloadCheckShares(shares, newRoute) {
    const route = newRoute ?? feedRepository.route;

    const length = shares.length;
    if (length > 0) {
      const beforeDate = shares[length - 1].createdAt;
      const afterDate = shares[0].createdAt;
      const PATH = `${route}/posts/check?beforeDate=${beforeDate}&afterDate=${afterDate}`;
      const { data } = await Axios.get(PATH, CONFIG);
      const { postsBeforeDate, postsAfterDate } = data;
      const object = {
        beforeOldest: { date: beforeDate, shares: postsBeforeDate },
        afterNewest: { date: afterDate, shares: postsAfterDate },
      };
      setCheckShares(object);
    }
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
    const command = userHasShared ? 'unshare' : 'share';
    const url = `/posts/${postId}/${command}`;
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
      reloadCheckShares(request?.data.shares, newFeedRepository.route);
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

  async function removePostViews(postId) {
    const newShares = [...shares].filter((share) => share.postId !== postId);
    const newFeedData = { ...feedData, shares: [...newShares] };
    setFeedData(newFeedData);
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
      const object = {
        ...feedData,
        shares: [...newShares, ...shares],
        posts: { ...posts, ...newPosts },
        users: { ...users, ...newUsers },
      };
      setFeedData(object);
      reloadCheckShares(object.shares);
    } catch (error) {
      handleError(error);
    }
  }

  async function unshiftFeed() {
    if (Number(checkShares.beforeOldest.shares) === 0) {
      return;
    }
    const PATH = `${feedRepository.route}/posts?beforeDate=${dates.oldestShare}`;
    try {
      const {
        data: { shares: newShares, posts: newPosts, users: newUsers },
      } = await Axios.get(PATH, CONFIG);
      const object = {
        ...feedData,
        shares: [...shares, ...newShares],
        posts: { ...posts, ...newPosts },
        users: { ...users, ...newUsers },
      };
      setFeedData(object);
      reloadCheckShares(object.shares);
    } catch (error) {
      handleError(error);
    }
  }

  async function updatePost(postId, text) {
    const url = `/posts/${postId}`;
    try {
      await Axios.put(url, { text }, CONFIG);
      await refreshPost(postId);
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
