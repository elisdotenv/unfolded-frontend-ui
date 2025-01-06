import PostCard from '@/components/post-card/post-card';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={`w-screen h-screen flex flex-col gap-4 items-center justify-center`}>
        <p className={`text-pink-600`}> we&apos;re live baby </p>
        <PostCard />
      </div>
    </>
  );
}
