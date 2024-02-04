import Link from 'next/link';

function StudentInfo() {
  return (
    <div>
      <h1>Your Name</h1>
      <Link href="https://github.com/Lorencet1/Assignment2.git">
        <div>My GitHub Repository</div>
      </Link>
    </div>
  );
}

export default StudentInfo;