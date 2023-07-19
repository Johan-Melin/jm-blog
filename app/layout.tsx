import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Productivity in Code",
    template: `%s | Productivity in Code`,
  },
  description:
    "Insights, Tips, and Tricks for Game development with Unity and C#.",
  icons: {
    icon: "./icon.ico",
    shortcut: "./icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="px-6 py-4 bg-black">
        <Link href="/">
          <h1 className="inline p-1 text-2xl font-bold bg-white rounded-md">
            PIC
          </h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="flex flex-row justify-between px-4 py-6 text-center border-t border-gray text-gray">
        <div />
        <p>{new Date().getFullYear()} &copy; Johan Melin</p>
        <a href="https://github.com/Johan-Melin">
          <Image
            src="/github.svg"
            alt="Github Logo"
            width={28}
            height={28}
            title="Visit my Github page"
            className="p-1 transition-all duration-300 rounded-md hover:bg-light hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {header}
          <div className="flex-grow max-w-5xl p-6 mx-auto bg-light">
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
