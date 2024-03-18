import { LINKS_DATA } from "@/constants/index";
import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <nav className="flex flex-col gap-4 items-center pb-16 pt-8">
        <Image
          src="/car.png"
          alt=""
          width={25 * 9.2625}
          height={25}
          priority
          quality={100}
        />
        <h2 className="text-7xl text-gray-900 text-center">krishna kumar</h2>
        <p className="text-gray-700 text-center">
          full stack web developer
          <br className="sm:hidden" />
          <span className="sm:inline hidden"> </span>&
          <span className="sm:inline hidden"> </span>
          <br className="sm:hidden" />
          cloud enthusiast
        </p>
      </nav>
      <section className="grid sm:grid-cols-3 grid-cols-2 gap-8 p-4 mb-auto">
        {LINKS_DATA.map((linkData, i) => (
          <a href={linkData.url} target="_blank" className="box" key={i}>
            <span>{linkData.icon}</span>
            <span>{linkData.name}</span>
          </a>
        ))}
      </section>
      <footer className="p-4 mt-8 text-center text-gray-700 text-sm sm:text-sm">
        ©2024 krishna kumar. all rights reserved.
      </footer>
    </Fragment>
  );
}
