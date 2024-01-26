import Link from 'next/link';

function StudentInfo() {
  return (
    <div>
      <h1>Your Name</h1>
      <Link href="https://github.com/Lorencet1/cprg306-assignments">
        <div>My GitHub Repository</div>
      </Link>
    </div>
  );
}

export default StudentInfo;