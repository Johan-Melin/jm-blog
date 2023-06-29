import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="p-8 my-6 text-center rounded-md bg-slate-800">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">Hello world!</h1>
        </Link>
        <p className="text-slate-300">Welcome</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="py-6 mt-6 text-center border-t border-slate-400 text-slate-400">
        <p>Developed by Johan</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="max-w-2xl mx-auto">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
