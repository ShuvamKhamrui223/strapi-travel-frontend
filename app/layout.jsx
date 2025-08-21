import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fetchFromStrapi } from "./utils/strapiFetch";
import { endpoints } from "./constants/endpoints";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* add site title and description from strapi */

export default async function RootLayout({ children }) {
  const { data } = await fetchFromStrapi(endpoints.GLOBAL);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        {data ? <Navbar navbarData={data?.navbar} /> : null}
        <main>{children}</main>
        <Footer  />
      </body>
    </html>
  );
}
