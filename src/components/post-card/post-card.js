'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PostCard = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /* Run on component mount [] */
  useEffect(() => {
    const fetchPosts = async () => {
      /* Axios configuration object */
      const config = {
        url: 'https://tremendous-car-d034f2b0fd.strapiapp.com/api/blog-posts?populate=*',
        method: 'GET',
      };

      try {
        const res = await axios(config);
        console.log(`RESPONSE`);
        console.log(res);
        const { data } = res.data;
        console.log(`DATA`);
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // If Encounter Error
  if (error) {
    return <p>{error}</p>;
  }

  // If Loading
  if (isLoading) {
    <p>Loading.....</p>;
  }

  console.log(`POSTS 👇🏾👇🏾👇🏾`);
  console.log(posts);

  return (
    <>
      <div className={`p-[2rem] border-[1.5px] border-purple-800 rounded-lg`}>
        <h1 className={`text-yellow-700`}> TITLE is {posts[0]?.attributes?.Title} </h1>
        <p className={`text-blue-700`}>BRIEF is {posts[0]?.attributes?.Brief} </p>
      </div>
    </>
  );
};

export default PostCard;
