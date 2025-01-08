import PostCard from '@/components/post-card/post-card';

export default function Home() {
  return (
    <>
      <div className={`w-screen h-screen flex flex-col gap-4 items-center justify-center`}>
        <p className={`text-pink-600`}> we&apos;re live baby </p>
        <PostCard />
        <p className={`text-lime-500`}>Added Context to observe changes</p>
        <p>This is an updated UI (wednesday)</p>
      </div>
    </>
  );
}
