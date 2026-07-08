import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOMOYO! | 「飲もう！」が続く合図。",
  description:
    "NOMOYO!は、お酒が好きな人同士でつながるクローズドなSNS飲ミュニティ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
