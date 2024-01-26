import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex flex-col items-center justify-start h-screen pt-10 text-4xl' >
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <h2 className='text-2xl pt-10'>Week 2 Assignment</h2>
      </Link>
    </main>
  );
}