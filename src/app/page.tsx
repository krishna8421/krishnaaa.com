import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto min-h-screen flex flex-col justify-between gap-8">
      <nav className="flex flex-col gap-4 items-center py-8">
        <Link href="/">
          <h2 className="text-6xl text-gray-900">krishna kumar</h2>
        </Link>
        <p className="text-gray-700">
          full stack web developer & cloud enthusiast
        </p>
      </nav>
      <section className="grid sm:grid-cols-3 grid-cols-2 gap-8 p-4 mb-auto">
        <div className="box">
          <span>icon</span>
          test
        </div>
        <div className="box">
          <span>icon</span>
          test
        </div>
        <div className="box">
          <span>icon</span>
          test
        </div>
        <div className="box">
          <span>icon</span>
          test
        </div>
        <div className="box">
          <span>icon</span>
          test
        </div>
        <div className="box">
          <span>icon</span>
          test
        </div>
      </section>
      <footer className="p-4 text-center">
        ©2024 krishna kumar. all rights reserved.
      </footer>
    </main>
  );
}
