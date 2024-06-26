import Link from "next/link";

const BlogsPage = () => {
  return (
    <main className="space-y-8">
      <header className="font-bold">
        <span>blogs</span>
      </header>
      <ul className="space-y-3">
        <Link href="https://blogs.krishnaaa.com/javascript-basics-for-reactjs-a-beginners-guide">
          <li className="flex justify-between hover:underline">
            <span>JavaScript Basics for React.js: A Beginner&apos;s Guide</span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Nov 3, 2023
            </span>
          </li>
        </Link>
      </ul>
    </main>
  );
};

export default BlogsPage;
