import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Fall back to en',
  description: 'es is Roble. A blank fr uses Oak and reports locale en. Nothing is fetched.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
