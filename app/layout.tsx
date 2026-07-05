import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cesar Lopez — Business Analyst",
  description: "Business analyst turning data into solutions. Portfolio of Cesar Lopez, based in the Rio Grande Valley, Texas.",
  keywords: ["business analyst", "data analyst", "portfolio", "SQL", "Tableau", "Legacy Analytics"],
  authors: [{ name: "Cesar Lopez" }],
  openGraph: {
    title: "Cesar Lopez — Business Analyst",
    description: "Business analyst turning data into solutions.",
    url: "https://cesarlopez.dev",
    siteName: "Cesar Lopez Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="light">{children}</body>
    </html>
  );
}