import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Krishna Kumar",
  description: "Krishna's Index Page",
};

type IProp = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: IProp) {
  return (
    <html lang="en">
      <body className={`${loveYaLikeASister.className}`}>
          {children}
      </body>
    </html>
  );
}
