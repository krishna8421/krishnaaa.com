import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import {
  COUNTRY_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  TWITTER_URL,
} from "@/constants/index";

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

const ogImage = "/og.png";
const twitterImage = "/twitter-og.png";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    countryName: COUNTRY_NAME,
    images: {
      url: ogImage,
      width: 1260,
      height: 800,
      alt: "Open Graph image for " + SITE_NAME,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: {
      url: twitterImage,
      width: 1260,
      height: 800,
      alt: "Twitter image for " + SITE_NAME,
    },
  },
};

type IProp = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: IProp) {
  return (
    <html lang="en">
      <body className={`${loveYaLikeASister.className}`}>{children}</body>
    </html>
  );
}
