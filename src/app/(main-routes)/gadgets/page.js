'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import PrimaryPostMobile from '@/components/primary/primary-post-mobile/primary-post-mobile';

const GadgetsPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Runs on Component Mount
  useEffect(() => {
    // A fn to fetch blog posts using axios
    const getBlogPosts = async () => {
      // Axios Configuraton Object
      const config = {
        url: 'https://tremendous-car-d034f2b0fd.strapiapp.com/api/blog-posts?populate=*',
        method: 'GET',
      };
      try {
        const res = await axios(config);
        const { data } = res.data;
        console.log(data);
        setBlogPosts(data);
      } catch (error) {
        // On Error encounter
        console.error(error.message);
        setError(error.message);
      } finally {
        // Stop Loading Contents
        setIsLoading(false);
      }
    };
    getBlogPosts();
  }, []);

  console.log(`blogs ⇣⇣⇣`);
  console.log(blogPosts);

  return (
    <>
      <div className={`bg-[#252525]`}>
        {blogPosts.map((p) => (
          <Link className={`block`} href={`/`} key={p?.id}>
            <PrimaryPostMobile
              href={`/gadgets/${p.attributes.slug}`}
              ImageURL={p?.attributes?.CoverImage?.data?.attributes?.url}
              alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
              title={p?.attributes?.Title}
              description={p?.attributes?.Brief}
              author={p?.attributes?.AuthorInfo?.AuthorName}
              authorImageURL={p?.attributes?.AuthorImage?.data?.attributes?.url}
              time={p?.attributes?.updatedAt}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default GadgetsPage;
