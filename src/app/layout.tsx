import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={` ${inter.className}`}>{children}</body>
    </html>
  );
}
