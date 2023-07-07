import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Productivity in Code",
    template: `%s | Productivity in Code`,
  },
  description:
    "Insights, Tips, and Tricks for Frontend, Backend, App and Game developers using React, TypeScript, Node, React Native, Unity, C# and AI.",
};

const logo = {
  //boxShadow: "1px 2px 9px #F4AAB9",
  width: 44,
  height: 44,
  background: "rgba(0,155,255,.05)",
  transform: "rotate(45deg)",
  boxShadow: "0 0 0 1px white, 0 0 4px 1px teal, inset 0 0 4px 1px teal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="flex flex-row items-center justify-between p-6 my-6 text-center rounded-md bg-dark">
        <div className="flex w-16">
          <div style={logo} />
        </div>
        <div className="flex flex-col grow">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">
              Productivity in Code
            </h1>
          </Link>
          <p className="text-light">
            &lt;&gt; Fullstack, App and Game dev &lt;/&gt;
          </p>
        </div>
        <div className="flex w-16" />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="py-6 mt-6 text-center border-t border-gray text-gray">
        <p>Developed by Johan</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col max-w-3xl min-h-screen px-6 mx-auto">
          {header}
          <div className="flex-grow">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
