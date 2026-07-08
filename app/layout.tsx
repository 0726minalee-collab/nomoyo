import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOMOYO! | 気持ちと機会をつなぐ合図",
  description:
    "NOMOYO!は、飲みたい気持ちを特別な合図で送り、自然に誘い合える飲みコミュニティアプリです。",
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
