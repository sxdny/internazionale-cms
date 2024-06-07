import "~/styles/globals.css";
import { Navbar } from "~/components/Navbar";


import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Internazionale",
  description: "built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
