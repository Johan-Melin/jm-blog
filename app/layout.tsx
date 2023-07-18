import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

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
      <div className="py-6 text-center border-t border-gray text-gray">
        <p>Developed by Johan</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {header}
          <div className="flex-grow max-w-6xl p-6 mx-auto bg-light">
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
