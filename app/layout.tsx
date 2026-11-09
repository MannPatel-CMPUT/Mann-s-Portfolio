import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mann Patel | Portfolio",
  description: "The portfolio of Mann Patel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
