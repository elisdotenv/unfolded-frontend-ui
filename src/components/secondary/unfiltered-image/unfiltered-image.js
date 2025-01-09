import Image from 'next/image';

export const UnfilteredPostImage = ({ alternativeText, ImageURL, Tag }) => {
  return (
    <>
      {/* Image and Tag */}
      <div className={`relative`}>
        <div></div>
        <Image
          layout='responsive'
          priority={true}
          className={`object-cover relative block m-0 p-0 lg:m-0 lg:p-0`}
          width={0}
          height={0}
          alt={alternativeText}
          src={ImageURL}
        />
        {Tag && (
          <span
            className={`absolute text-[0.875rem] font-semibold font-primary bottom-[10px] block left-[10px] z-30 text-light/80 border border-light py-[3px] px-[12px] rounded-[4px]`}>
            {Tag}
          </span>
        )}
      </div>
    </>
  );
};

export const UnfilteredInlineImage = ({ alternativeText, ImageURL, width, height, captionText, layout = 'responsive' }) => {
  return (
    <>
      <div className={`flex flex-col gap-[6px] relative px-[1rem] lg:px-0`}>
        <Image src={ImageURL} alt={alternativeText} width={width} height={height} layout={layout} className={`m-0 rounded`} />
        <p className={`font-secondary italic  text-[.875rem] text-center leading-[22px] m-0 text-grayed text-lightGray`}>
          {capitalizeFirstLetter(alt)}
        </p>
        <div className={`text-[#f6f3ef] text-[.75rem] p-[0.375rem] z-30 font-normal absolute right-[0.5rem] top-0`}>
          {captionText}
        </div>
      </div>
    </>
  );
};
