'use client';
import { useState, useEffect } from 'react';
import { KeyPointsWrapper } from '@/components/secondary/key-points-wrapper/key-points';
import { UnfilteredPostImage } from '@/components/secondary/unfiltered-image/unfiltered-image';
import { PostViewPage } from '@/components/secondary/view-page/view-page';
import PrimaryPostMobile from '@/components/primary/primary-post-mobile/primary-post-mobile';

export const IndependentGadgetsPage = ({ params }) => {
  const { slug } = params;
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [openShare, setOpenShare] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // --- Close Share Button Dropdown
  const closeShareDropDown = (e) => {
    setOpenShare(false);
  };

  // --- Open/Close Share Button Dropdown
  const showShareItems = () => {
    setOpenShare(!openShare);
  };

  // --- Copy Link (Current URL Path) to user's clipboard
  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  // --- Runs on Every Component Mount and Everytime [slug] value changes
  http: useEffect(() => {
    document.body.addEventListener('click', closeShareDropDown);

    /* --- Async fn to fetch all the blog posts (Filtering is after fetching all blog posts ) */
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://tremendous-car-d034f2b0fd.strapiapp.com/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
        );
        const currentPost = data.data[0];
        setBlogPost(currentPost);

        // --- fetch Related Posts
        if (currentPost) {
          const categoryId = currentPost.attributes.categories.data[0].id;
          console.log(`Category Id ↓`);
          console.log(categoryId);

          // --- fetching related posts basiing on current post's id
          const relatedRes = await axios.get(
            `https://tremendous-car-d034f2b0fd.strapiapp.com/api/blog-posts?filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&populate=*`
          );
          setRelatedPosts(relatedRes.data.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  return (
    <>
      <div className='col-span-12 mx-auto grid grid-cols-12 lg:max-w-[1200px] lg:w-full min-h-screen gap-[0.75rem] bg-[#252525] relative'>
        {/*  --- Post Tag Element "Mobile Screens" */}
        <div className='px-[1rem] pt-[2rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
          <span className='bg-transparent font-primary font-semibold text-[0.875rem] border border-[#a4a4a4] rounded px-[12px] py-[3px] inline-block'>
            {Tags[0].Tags}
          </span>
        </div>
        {/* --- xxx --- */}
        {/*   --- Post Title Element "Mobile Screens" */}
        <div className='px-[1rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
          <h1 className='font-quadraSemiBold tracking-wide text-[2.125rem] leading-[1.1]  text-[#fffdfa]'>{Title}</h1>
        </div>
        {/* --- xxx --- */}
        {/*  --- Post Short Brief Element "Mobile Screens" */}
        <div className='px-[1rem] lg:hidden col-span-12 block m-0 md:col-span-10 md:col-start-2'>
          <p className='text-[#fffdfa] font-normal font-secondary text-[1.25rem] leading-[1.25]'>{Description}</p>
        </div>
        {/* --- xxx --- */}
        {/*  --- Post CoverImage Element "Mobile Screens" */}
        <div className='col-span-12 lg:hidden border-b-[2px] border-b-[#1e2522] md:col-span-10 md:col-start-2'>
          <UnfilteredPostImage ImageURL={CoverImageURL} alternativeText={CoverImage?.data?.attributes?.alternativeText || ''} />
        </div>
        {/* --- xxx --- */}
        {/*  --- Post Summary Element "Mobile Screens" */}
        {/* a. Keypoints */}
        <div className='col-span-12 lg:col-span-8 md:col-span-10 md:col-start-2'>
          {KeyPoints && <KeyPointsWrapper KeyPointsContext={KeyPoints} />}
        </div>
        {/* b. Summary Block-1 & Summary Block-2 */}
        <div className='col-span-12 lg:col-span-8 md:col-span-10 md:col-start-2'>
          <PostViewPage TextBlockOne={TextBlockOne} TextBlockTwo={TextBlockTwo} NoteContext={Note} RefSource={RefSource} />
        </div>
        {/* --- xxx --- */}
        {/*   --- Ad-Space Element "Mobile Screens" */}
        <div className='bg-[#333333] flex items-center justify-center text-center col-span-12 lg:hidden w-full min-h-[30vh] p-[2rem] md:col-span-10 md:col-start-2'>
          <p>Animated GIF CTA redirecting to Uptown Communities</p>
        </div>
        {/* --- xxx --- */}
        {/* --- Related Posts Section */}
        <div className={`col-span-12 w-full h-full grid grid-cols-12 px-[1rem]`}>
          <div className={`col-span-12 py-[2px] lg:hidden `}>
            <h4
              className={`text-[1.25rem] tracking-wider font-quadraSemiBold text-[#ffffda]  lg:hidden py-[2px] flex items-center gap-[0.625rem]`}>
              <GoZap className={`text-[1.5rem]`} />
              RELATED POSTS
            </h4>
          </div>
        </div>
        {/* --- xxx --- */}
        {/* A.  --- Bottom Related Posts Element "Mobile Screens" */}
        <div className='col-span-12 md:hidden flex flex-col gap-[0.75rem]'>
          <ul className={`${styles.secondaryPostsGrid} flex flex-col gap-[1rem]`}>
            {secondaryRelatedPosts.map((p) => (
              <li className={`${styles.secondaryPost}`} key={p.id}>
                <PrimaryPostMobile
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                  ImageURL={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                  title={p?.attributes?.Title}
                  description={p?.attributes?.Brief}
                  author={p?.attributes?.AuthorInfo?.AuthorName}
                  authorImageURL={p?.attributes?.AuthorImage?.data?.attributes?.url}
                  tag={p?.attributes?.Tags}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* --- xxx --- */}

        {/*  --- CTA Element "Mobile Screens" */}
        <div className='lg:hidden col-span-12 px-[1rem] '>
          <JoinWhatsappCTA />
        </div>
        {/* --- xxx --- */}

        {/* 1. Link Copied Alert Box */}
        {isLinkCopied && (
          <div
            className={`md:hidden absolute w-fit inline-flex justify-center items-center top-[50vh] left-0 right-0 mx-auto bg-[#333333] rounded-[6px]`}>
            <span className={`text-[#fcfdfd] text-[1rem] font-ternaryMedium px-[0.75rem] py-[6px] flex items-center gap-2`}>
              {' '}
              <FaCopy className={`text-[#fcfdfd]`} />
              Copied to Clipboard!
            </span>
          </div>
        )}
      </div>
    </>
  );
};
