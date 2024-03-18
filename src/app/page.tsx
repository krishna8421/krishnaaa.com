import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto min-h-screen flex flex-col justify-between">
      <nav className="flex flex-col gap-4 items-center pb-16 pt-4">
        <Image
          src="/car.svg"
          alt="krishna kumar"
          width={300}
          height={2779}
          className="object-cover"
        />
        <Link href="/">
          <h2 className="text-7xl text-gray-900 text-center">krishna kumar</h2>
        </Link>
        <p className="text-gray-700 text-center">
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
      <footer className="p-4 mt-8 text-center text-gray-700">
        ©2024 krishna kumar. all rights reserved.
      </footer>
    </main>
  );
}
