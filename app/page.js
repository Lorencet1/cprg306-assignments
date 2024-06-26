
import Link from "next/link";
import React from "react";


export default function Page() {
  return (
    <main className='flex flex-col items-center justify-start h-screen pt-10 text-4xl' >
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <h2 className='text-2xl pt-10'>Week 2 Assignment</h2>
      </Link>
      <Link href="/week-3">
        <h2 className='text-2xl pt-10'>Week 3 Assignment</h2>
      </Link>
      <Link href="/week-4">
        <h2 className='text-2xl pt-10'>Week 4 Assignment</h2>
      </Link>
      <Link href="/week-5">
        <h2 className='text-2xl pt-10'>Week 5 Assignment</h2>
      </Link>
      <Link href="/week-6">
        <h2 className='text-2xl pt-10'>Week 6 Assignment</h2>
      </Link>
      <Link href="/week-7">
        <h2 className='text-2xl pt-10'>Week 7 Assignment</h2>
      </Link>
      <Link href="/week-8">
        <h2 className='text-2xl pt-10'>Week 8 Assignment</h2>
      </Link>
      <Link href="/week10">
        <h2 className='text-2xl pt-10'>Week 10 Assignment</h2>
      </Link>

      
    </main>
  );
}