import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Productivity in Code",
  description:
    "Insights, Tips, and Tricks for Frontend, Backend, App and Game developers using React, TypeScript, Node, React Native, Unity, C# and AI.",
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
          <h1 className="text-3xl font-bold text-white">
            Productivity in Code
          </h1>
        </Link>
        <p className="text-slate-300">Fullstack, App and Game development</p>
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
        <div className="flex flex-col max-w-2xl min-h-screen px-6 mx-auto">
          {header}
          <div className="flex-grow">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
