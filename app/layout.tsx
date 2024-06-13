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
      <div className="px-6 py-4">
        <Link href="/">
          <h1 className="inline p-1 text-2xl font-bold bg-white rounded-md">
            PIC
          </h1>
        </Link>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 10 }}>
            <Image
              src="/background.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={75}
              priority={false} 
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
              className="z-10 fixed"
            />
            <div className="absolute inset-0 z-20" style={{background: 'radial-gradient(circle, transparent, rgba(0, 0, 0, 0.75))'}}></div>
          </div>
          <header className="z-30">
            {header}
          </header>
          <div className="flex-grow max-w-5xl p-6 mx-auto z-30">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
