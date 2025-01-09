'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateDescription, truncateTitle } from '@/utils/truncations-functions';
import { enhancedlastUpdate } from '@/utils/date-functions';
import { FaArrowUpRightFromSquare, FaBookmark, FaRegBookmark, FaLink, FaCopy } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
import { PiDotOutlineFill } from 'react-icons/pi';

const PrimaryPostMobile = ({ href, alt, ImageURL, title, description, time, author, authorImageURL }) => {
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  // Copy Link (Current URL Path) to user's clipboard
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

  // Change the bookmark Icon on every click
  const setBookmark = () => {
    setIsBookMarked(!isBookMarked);
  };

  return (
    <>
      <div className={`relative pb-[1.25rem]`}>
        <div
          className={`${styles.postWrapper} bg-gradient-to-b from-[#333333] to-transparent p-[1rem] rounded-t-2xl border-t-[1.25px] border-t-[#a8b3cf] block`}>
          {/* 1. --- Post Header Content */}
          <div className={`flex justify-between items-center`}>
            {/* --- Author profile & Updated time */}
            <div className={`flex items-center gap-2`}>
              {/* --- Author image */}
              <Image
                className={`rounded-full m-0 p-0`}
                src={authorImageURL}
                alt={'author Image'}
                width={36}
                height={36}
                objectFit='cover'
                layout='intrinsic'
              />

              {/* --- Author-name & read-time/updated date  */}
              <div className={`flex flex-col`}>
                <h4 className={`${styles.AuthorName}`}>{author}</h4>
                <h4 className={`${styles.Time}`}>
                  4m read time <PiDotOutlineFill /> {enhancedlastUpdate(time)}
                </h4>
              </div>
            </div>

            {/* --- A go-to button and See more actions button */}
            <div className={`flex items-center gap-4`}>
              <Link href={href}>
                <span>
                  <FaArrowUpRightFromSquare className={`text-[18px] text-[#fdfcfd]`} />
                </span>
              </Link>
              <span>
                <IoIosMore className={`text-[24px] text-[#fdfcfd]`} />
              </span>
            </div>
          </div>
          {/* ####### */}

          {/* 2. --- Post Main Content */}
          <div className={`${styles.TitleImage}`}>
            <div className={`${styles.TitleDescriptionTag}`}>
              {/* Title */}
              <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
              {/* Descriptions */}
              <p className={`${styles.DescriptionMd} hidden`}>{truncateDescription(description)}</p>
            </div>

            {/* --- Image */}
            <div className={`${styles.ImageWrapper}`}>
              <Image
                className={`${styles.Image}`}
                width={10000}
                height={10000}
                layout='fixed'
                priority={true}
                alt={alt}
                src={ImageURL}
              />
            </div>

            {/* --- Descriptions */}
            <p className={`${styles.Description} md:hidden`}>{truncateDescription(description)}</p>
          </div>
          {/* ####### */}

          {/* 3. --- Post Footer Content */}
          <div className={`flex items-center gap-[0.5rem] mt-[0.625rem]`}>
            {/* --- Bookmark */}
            <span
              onClick={() => setBookmark()}
              className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem]`}>
              {isBookMarked ? (
                <FaBookmark className={`text-[20px] text-[#fdfcfd]`} />
              ) : (
                <FaRegBookmark className={`text-[20px] text-[#fdfcfd]`} />
              )}
            </span>

            {/* --- Link & Read-post */}
            <div className={`flex items-center gap-2`}>
              <span
                onClick={() => copyLinkToClipboard()}
                className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem] `}>
                <FaLink className={`text-[22px] text-[#fdfcfd]`} />
              </span>

              <Link href={href}>
                <span className={`${styles.GoBtn}`}>View post</span>
              </Link>
            </div>
          </div>
          {/* ####### */}
        </div>
        {isLinkCopied && (
          <div
            className={`absolute w-fit inline-flex justify-center items-center top-[0.5rem] left-0 right-0 mx-auto bg-[#252525] rounded-[6px]`}>
            <span className={`flex items-center gap-1 text-[#fcfdfd] text-[15px] font-ternaryMedium px-[0.75rem] py-[6px]`}>
              <FaCopy /> Link Copied!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PrimaryPostMobile;
