import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={`w-screen h-screen flex flex-col gap-4 items-center justify-center`}>
        <p>Fetching...</p>
        <Link href={`/gadgets`}>Gadgets</Link>
      </div>
    </>
  );
}
