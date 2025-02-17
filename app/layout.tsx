import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";
import Image from "next/image";
import { SiChessdotcom } from "react-icons/si";
import { FaPencilAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: {
    default: "Productivity in Code",
    template: `%s | Productivity in Code`,
  },
  description:
    "A comprehensive platform that combines all the apps you need for your personal and work needs in one place.",
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
      <div className="px-6 py-4">
        <Link href="/">
          <h1 className="inline p-1 text-2xl font-bold">
            Dev Narratives
          </h1>
        </Link>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="z-30">
            {header}
          </header>
          <div className="flex flex-row">
            <div className="flex-grow max-w-5xl p-6 mx-auto z-30">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
