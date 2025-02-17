import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dev Narratives",
    template: `%s | Dev Narratives`,
  },
  description:
    "Tech insights from the trenches.",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="px-6 py-4 shadow-md">
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
