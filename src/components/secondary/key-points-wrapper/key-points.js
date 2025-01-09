import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from './page.module.css';
import { BsFillPinAngleFill } from 'react-icons/bs';

export const KeyPointsWrapper = ({ KeyPointsContext }) => {
  return (
    <div className={`text-white`}>
      <BlocksRenderer
        content={KeyPointsContext}
        blocks={{
          list: ({ children }) => (
            <>
              <span
                className={`text-[#fcfdfd] uppercase font-quadraMedium tracking-widest px-[1rem] py-1 text-[1.25rem] flex gap-2 items-center`}>
                <BsFillPinAngleFill className={`text-[#f0705a]`} />
                Highlights
              </span>
              <div
                className={`bg-gradient-to-b from-[#333333] via-[#333333] to-transparent relative lg:-ml-[0.625rem] mb-0 pb-0 border-t-[2px] rounded-t-2xl border-[#f0705a] lg:rounded-lg lg:border-none lg:bg-[#333333] lg:from-[#333333] lg:py-[0.75rem] lg:px-[0.5rem]`}>
                <ol className={`${styles.orderedList}`}>{children}</ol>
              </div>
            </>
          ),
        }}
      />
    </div>
  );
};
