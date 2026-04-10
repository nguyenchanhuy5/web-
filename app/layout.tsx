import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Aid Courses",
  description: "Explore student support courses by enrollment stage."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
