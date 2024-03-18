import Link from "next/link";
import CarSvg from "@/components/car-svg";
// import Image from "next/image";
import { LINKS_DATA } from "@/constants/index";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto min-h-screen flex flex-col justify-between">
      <nav className="flex flex-col gap-4 items-center pb-16 pt-4">
        {/* <Image
          src={"/car.svg"}
          alt="krishna kumar's future car"
          width={300}
          height={2779}
          priority
          quality={100}
          className="object-cover select-none"
        /> */}
        <CarSvg />
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
          <div className="box" key={i}>
            <span>{linkData.icon}</span>
            <span>{linkData.name}</span>
          </div>
        ))}
      </section>
      <footer className="p-4 mt-8 text-center text-gray-700 text-sm sm:text-sm">
        ©2024 krishna kumar. all rights reserved.
      </footer>
    </main>
  );
}
