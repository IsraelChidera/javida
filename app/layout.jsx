import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButton from "../components/widgets/FloatingButton";
import BackgroundMusic from "../components/widgets/BackgroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JAVIDA'25",
  description: "Meet the Davids",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}

          <BackgroundMusic />
      </body>
    </html>
  );
}
